#!/bin/bash
set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Get token from environment or prompt
if [ -z "$MASTODON_TOKEN" ]; then
  read -sp "Mastodon Personal Access Token: " token
  echo ""
else
  token="$MASTODON_TOKEN"
  echo -e "${BLUE}Using token from MASTODON_TOKEN env var${NC}"
fi

if [ -z "$token" ]; then
  echo -e "${RED}❌ Token is required!${NC}"
  exit 1
fi

echo ""

# Find latest blog post
latest_dir=$(find /blog -maxdepth 1 -type d -name "[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]-*" | sort -r | head -1)

if [ -z "$latest_dir" ]; then
  echo -e "${RED}❌ No blog post found!${NC}"
  exit 1
fi

latest_post=$(find "$latest_dir" -name "post.md" | head -1)
message=$(cat "$latest_post" | sed "/!\[.*\](image[^)]*\.\(png\|jpg\|jpeg\|gif\|webp\))/d")
post_date=$(basename "$latest_dir" | cut -d"-" -f1-3)

echo -e "${BLUE}📅 Date: $post_date${NC}"
echo -e "${BLUE}📝 Message:${NC}"
echo "$message"
echo ""

# Confirm
read -p "Post to Mastodon? (y/n) " confirm
if [ "$confirm" != "y" ]; then
  echo "Cancelled"
  exit 1
fi

# Upload images
echo -e "${BLUE}📸 Uploading images...${NC}"
media_ids="[]"
for img in "$latest_dir"/image*; do
  if [ -f "$img" ]; then
    echo "  - $(basename "$img")"
    media_json=$(curl -s -w "\n%{http_code}" -X POST -H "Authorization: Bearer $token" -F "file=@$img" https://mastodon.social/api/v1/media)
    media_http_code=$(echo "$media_json" | tail -n1)
    media_body=$(echo "$media_json" | sed '$d')
    media_id=$(echo "$media_body" | jq -r .id 2>/dev/null)
    if [ "$media_http_code" = "200" ] && [ -n "$media_id" ] && [ "$media_id" != "null" ]; then
      new_media_ids=$(echo "$media_ids" | jq --arg id "$media_id" ". + [\$id]" 2>&1)
      if [ $? -eq 0 ]; then
        media_ids="$new_media_ids"
        echo -e "${GREEN}    ✓ Uploaded (ID: $media_id)${NC}"
      else
        echo -e "${YELLOW}    ⚠️ jq error: $new_media_ids${NC}"
      fi
    else
      echo -e "${YELLOW}⚠️  Failed to upload $(basename "$img")${NC}"
      echo "    HTTP Status: $media_http_code"
      echo "$media_body" | jq . 2>/dev/null || echo "$media_body"
    fi
  fi
done
echo "Media IDs: $media_ids"

# Publish
echo -e "${BLUE}📤 Publishing to Mastodon...${NC}"
payload=$(jq -n --arg status "$message" --argjson media_ids "$media_ids" "{status: \$status, media_ids: \$media_ids}")
status_response=$(curl -s -w "\n%{http_code}" -X POST -H "Authorization: Bearer $token" -H "Content-Type: application/json" https://mastodon.social/api/v1/statuses -d "$payload")
http_code=$(echo "$status_response" | tail -n1)
response_body=$(echo "$status_response" | sed '$d')
status_id=$(echo "$response_body" | jq -r .id 2>/dev/null)

if [ "$http_code" = "200" ] && [ "$status_id" != "null" ] && [ -n "$status_id" ]; then
  echo -e "${GREEN}✅ Post published successfully!${NC}"
  username=$(echo "$response_body" | jq -r .account.username 2>/dev/null)
  echo -e "${BLUE}🔗 URL: https://mastodon.social/@$username/$status_id${NC}"
else
  echo -e "${RED}❌ Publishing failed!${NC}"
  echo "HTTP Status: $http_code"
  echo "Response:"
  echo "$response_body" | jq . 2>/dev/null || echo "$response_body"
  exit 1
fi

# Cleanup
unset token payload status_id
