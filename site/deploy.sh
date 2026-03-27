#!/bin/bash
# Build and deploy to GitHub Pages
# Run from the site/ directory: bash deploy.sh

set -e

echo "Building..."
npm run build

echo "Copying to repo root..."
cp -r out/* ../
touch ../.nojekyll

echo "Done. Commit and push from the repo root to deploy."
