# GitHub Pages Deployment Guide

## Quick Setup Instructions

### 1. Create GitHub Repository
1. Go to [GitHub](https://github.com) and create a new repository named `uslan.co`
2. Make it public (required for GitHub Pages on free accounts)

### 2. Update Configuration
1. Open `package.json` and replace `yourusername` with your GitHub username:
   ```json
   "homepage": "https://YOURUSERNAME.github.io/uslan.co"
   ```

2. Update `vite.config.ts` if needed (already configured for `/uslan.co/` base path)

### 3. Initialize and Push to GitHub
```bash
# Initialize git repository
git init

# Add all files
git add .

# Initial commit
git commit -m "Initial commit: Efe Uslan portfolio coming soon page"

# Add remote repository (replace YOURUSERNAME)
git branch -M main
git remote add origin https://github.com/YOURUSERNAME/uslan.co.git

# Push to GitHub
git push -u origin main
```

### 4. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select "Deploy from a branch"
5. Select branch: **gh-pages**
6. Select folder: **/ (root)**
7. Click **Save**

### 5. Automatic Deployment
- The GitHub Actions workflow will automatically build and deploy on every push to main
- Check the **Actions** tab to see deployment progress
- Your site will be available at: `https://YOURUSERNAME.github.io/uslan.co`

### 6. Manual Deployment (Alternative)
```bash
# Build and deploy manually
pnpm run deploy
```

## Troubleshooting

### If deployment fails:
1. Check the Actions tab for error messages
2. Ensure GitHub Pages is enabled in repository settings
3. Make sure the repository is public
4. Verify the homepage URL in package.json is correct

### If images don't load:
- Images are automatically processed by Vite and should work correctly
- Check browser console for 404 errors
- Verify image paths in the code

### Custom Domain (Optional)
To use a custom domain like `uslan.co`:
1. Add a `CNAME` file to the `public` folder with your domain
2. Configure DNS settings with your domain provider
3. Update the homepage in package.json to your custom domain

## Project Structure
```
uslan.co/
├── .github/workflows/deploy.yml  # GitHub Actions workflow
├── src/
│   ├── assets/                   # Images and static files
│   ├── App.tsx                   # Main React component
│   ├── App.css                   # Styles
│   └── ...
├── dist/                         # Build output (auto-generated)
├── package.json                  # Project config with GitHub Pages setup
├── vite.config.ts               # Vite config with base path
└── README.md                    # Documentation
```

## Next Steps
1. Replace `YOURUSERNAME` in package.json with actual GitHub username
2. Push to GitHub repository
3. Enable GitHub Pages in repository settings
4. Wait for deployment (usually 2-5 minutes)
5. Visit your live site!
