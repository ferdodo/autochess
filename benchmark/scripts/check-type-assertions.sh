#!/bin/bash

set -e

echo "Checking for type assertions (as keyword)..."

found=false

for file in $(find src perf -name "*.ts" -o -name "*.tsx"); do
  if grep -q " as " "$file"; then
    echo "❌ Type assertion found in $file"
    grep -n " as " "$file" || true
    found=true
  fi
done

if [ "$found" = true ]; then
  echo ""
  echo "Error: Type assertions (as keyword) are not allowed"
  exit 1
fi

echo "✓ No type assertions found"
