#!/bin/bash
# Foundscape Deploy Script
# Run this from your ~/foundscape folder when you wake up
# It will: clean up, init git, create GitHub repo, push, and deploy to Vercel

echo "🚀 Deploying Foundscape..."

# 1. Clean up VM artifacts
rm -rf .git .next

# 2. Init fresh git repo
git init
git checkout -b main
git add .
git commit -m "Initial commit: Foundscape foundation repair website"

# 3. Create GitHub repo (requires gh CLI — run 'brew install gh' if not installed)
gh repo create foundscape --public --source=. --remote=origin --push

# 4. Install Vercel CLI and deploy
npm install -g vercel
vercel --prod --yes

echo "✅ Done! Your site is live."
echo "Next step: Add foundscape.ca domain to Vercel dashboard and Google Search Console"
