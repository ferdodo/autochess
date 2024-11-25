#!/bin/bash

get_modified_files_in_head() {
    git diff --name-only HEAD --relative=core
}

get_modified_files_in_previous_commit() {
    git diff-tree --no-commit-id --name-only -r HEAD^ --relative=core
}

filter_ts_files() {
    echo "$1" | grep -E "^(utils|api).*\.ts$" | grep -E -v "*.test.ts$" | head -n 3
}

head_files=$(get_modified_files_in_head)
filtered_head_files=$(filter_ts_files "$head_files")

if [ -z "$filtered_head_files" ]; then
    last_commit_files=$(get_modified_files_in_previous_commit)
    filtered_files=$(filter_ts_files "$last_commit_files")
else
    filtered_files="$filtered_head_files"
fi

if [ -z "$filtered_files" ]; then
    echo "No modified TypeScript files to be mutated."
    exit 0
fi

files_to_mutate=$(echo "$filtered_files" | tr '\n' ',' | sed 's/,$//')
mkdir -p reports/mutation
npx stryker run --mutate "$files_to_mutate"
