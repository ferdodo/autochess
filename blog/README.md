# Blog

Blog posts live here as readable markdown files in the code source. They're also published to Mastodon.

Posts share how the game evolves. They're written for anyone interested in watching it happen.

## How to Write a Post

In the `blog/` directory, create a new folder called `xxxx-post-name`:
- `xxxx` is the next number in sequence (look at existing folders and increment)
- `post-name` is what you're writing about (e.g. `0013-camera-presets`)

Create `post.md` inside. Write in markdown, but remember the post will be published to Mastodon: no markdown formatting and maximum 500 characters.

Optionally, add an image (`image.png`, `image.jpg`, or `image.gif`). To make it visible in the markdown preview, reference it in your post: `![](image.png)`. When published to Mastodon, the image will be attached to the post.

## How to Publish a Post

Rename the folder from `xxxx-post-name` to `2026-07-26-post-name`. Use today's date. The date prefix marks the post as published.

Once a post has a date, don't modify it.

Run the publish script. Choose one:

```bash
bash blog/publish.sh
```

Or with Docker:

```bash
docker compose run --rm --build blog
```

The script needs permission to post to your Mastodon account. Go to your Mastodon account settings, find Developer > Your applications, and create a new application. Copy the access token it gives you.

When the script asks for it, paste the token.

The script finds the most recent post with a date prefix and publishes it to Mastodon.
