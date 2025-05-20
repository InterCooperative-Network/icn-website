#!/bin/bash

# sync-docs.sh
# Copies markdown documentation from icn-docs to icn-website/src/content/docs/

# Exit immediately if a command exits with a non-zero status.
set -e

# Define source and destination paths
# SCRIPT_DIR is the directory where this script resides (icn-website/scripts)
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WEBSITE_ROOT_DIR="$(dirname "$SCRIPT_DIR")" # icn-website
DOCS_SOURCE_DIR="$WEBSITE_ROOT_DIR/../icn-docs" # ../icn-docs relative to website root
DOCS_DEST_DIR="$WEBSITE_ROOT_DIR/src/content/docs"

# Ensure the destination directory exists
mkdir -p "$DOCS_DEST_DIR"

echo "Starting documentation sync from $DOCS_SOURCE_DIR to $DOCS_DEST_DIR"

# List of topics (directory names in icn-docs)
# These should match the slugs used in the Astro pages (e.g., api.astro loads api.md)
topics=("api" "architecture" "economy" "governance" "networking" "observability" "philosophy" "rfcs" "onboarding")

# Counter for found files
found_count=0

for topic_slug in "${topics[@]}"; do
  echo "Processing topic: $topic_slug"
  
  # Define potential source file paths within the topic directory in icn-docs
  # Common patterns: README.md or [topic_slug].md in the topic's directory
  source_readme_path="$DOCS_SOURCE_DIR/$topic_slug/README.md"
  source_topic_file_path="$DOCS_SOURCE_DIR/$topic_slug/$topic_slug.md"
  
  # Define the destination file path in icn-website
  dest_file_path="$DOCS_DEST_DIR/$topic_slug.md"
  
  # Check if README.md exists and copy it
  if [ -f "$source_readme_path" ]; then
    echo "  Found $source_readme_path. Copying to $dest_file_path"
    cp "$source_readme_path" "$dest_file_path"
    found_count=$((found_count + 1))
  # Else, check if [topic_slug].md exists and copy it
  elif [ -f "$source_topic_file_path" ]; then
    echo "  Found $source_topic_file_path. Copying to $dest_file_path"
    cp "$source_topic_file_path" "$dest_file_path"
    found_count=$((found_count + 1))
  else
    echo "  No README.md or $topic_slug.md found for topic '$topic_slug' in $DOCS_SOURCE_DIR/$topic_slug/"
    # Optionally, create an empty file or a placeholder if a source is missing
    # For now, we'll just note it. The Astro pages have a "Coming Soon" fallback.
  fi
done

echo "Documentation sync complete. Copied $found_count files."

# Make the script executable from the command line
# chmod +x scripts/sync-docs.sh
echo "Run 'chmod +x scripts/sync-docs.sh' to make this script executable." 