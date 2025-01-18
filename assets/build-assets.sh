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

unzip -u -q "$ZIP_FILE"

function output-filename {
    echo "$2" | sed -E "s/\.$1/\.$1\.base64-data-url\.ts/g"
}

function image-to-base64 {
    base64 -w 0 "$1"
}

function convert-to-base64-data-url-js {
    case "$1" in
        obj)
            mime="model/obj"
            ;;
        png)
            mime="image/png"
            ;;
        gltf)
            mime="model/gltf"
            ;;
        glb)
            mime="model/gltf"
            ;;
        mtl)
            mime="model/mtl"
            ;;
        *)
            echo "Unknown file format !"
            exit 1
            ;;
    esac

    echo "export default \"data:$mime;base64,$(image-to-base64 "$2")\";" > "$3"
}

function export-blender-file {
    # blender -b arena.blend --python-expr "import bpy; bpy.ops.export_scene.obj(filepath='arena.obj')"
    blender -b arena.blend --python-expr "import bpy; bpy.ops.export_scene.gltf(filepath='arena.gltf', export_draco_mesh_compression_enable=False)"
}

export-blender-file

find . -name "*.png" | while IFS= read -r image; do
    convert-to-base64-data-url-js png "$image" "$(output-filename png "$image")"
done

find . -name "*.obj" | while IFS= read -r obj; do
    convert-to-base64-data-url-js obj "$obj" "$(output-filename obj "$obj")"
done

find . -name "*.mtl" | while IFS= read -r mtl; do
    convert-to-base64-data-url-js mtl "$mtl" "$(output-filename mtl "$mtl")"
done

find . -name "*.glb" | while IFS= read -r glb; do
    convert-to-base64-data-url-js glb "$glb" "$(output-filename glb "$glb")"
done
