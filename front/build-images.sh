#!/bin/bash
set -e

ZIP_FILE="Tiny RPG Character Asset Pack v1.03b -Full 20 Characters.zip"

if [ ! -f "$ZIP_FILE" ]; then
    echo "The ZIP file containing the texture pack is missing."
    echo "This texture pack is required for the project to function correctly."
    echo "You can find it on itch.io at the following link:"
    echo "https://zerie.itch.io/tiny-rpg-character-asset-pack"
    exit 1
fi

unzip -q "$ZIP_FILE"

function find-images {
    find . -name "*.png"
}

function image-to-base64 {
    base64 -w 0 "$1"
}

function output-filename {
    echo "$1" | sed -E "s/\.png/\.png\.base64-data-url\.ts/g"
}

function convert-to-base64-data-url-js {
    echo "export default \"data:image/png;base64,$(image-to-base64 "$1")\";" > "$2"
}

find-images | while IFS= read -r image; do
    convert-to-base64-data-url-js "$image" "$(output-filename "$image")"
done
