# 🚀 Deployment Guide - GitHub Pages

## Quick Deployment Steps

### 1. Create GitHub Repository
```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit - Ciśnienie w normie café website"

# Create new repository on GitHub.com
# Then push your code:
git remote add origin https://github.com/YOUR_USERNAME/cisnienie-w-normie-cafe.git
git branch -M main
git push -u origin main
```

### 2. Enable GitHub Pages
1. Go to your repository on GitHub.com
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically deploy when you push to main branch

### 3. Alternative: Manual Deployment
If you prefer manual deployment:

1. **Build the project:**
```bash
npm run build
```

2. **Deploy to GitHub Pages:**
```bash
# Install gh-pages package
npm install --save-dev gh-pages

# Add to package.json scripts:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

### 4. Configure Repository Settings
1. Go to **Settings** → **Pages**
2. Set **Source** to **Deploy from a branch**
3. Select **gh-pages** branch
4. Click **Save**

## 🔧 Configuration Files Added

### GitHub Actions Workflow
- `.github/workflows/deploy.yml` - Automatic deployment on push

### Vite Configuration
- Updated `vite.config.js` with base path for GitHub Pages

## 📝 Important Notes

1. **Repository Name**: Make sure your repository is named `cisnienie-w-normie-cafe` for the base path to work correctly

2. **Custom Domain**: If you have a custom domain, update the base path in `vite.config.js`

3. **Environment Variables**: The build automatically detects production environment

## 🌐 Your Website URL
After deployment, your website will be available at:
```
https://YOUR_USERNAME.github.io/cisnienie-w-normie-cafe/
```

## 🔄 Automatic Deployment
Every time you push to the `main` branch, GitHub Actions will:
1. Install dependencies
2. Build the project
3. Deploy to GitHub Pages

## 🐛 Troubleshooting

### Build Fails
- Check GitHub Actions logs in your repository
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### 404 Errors
- Check if the base path in `vite.config.js` matches your repository name
- Ensure the repository is public (or you have GitHub Pro for private repos)

### Styling Issues
- Clear browser cache
- Check if all CSS files are being loaded correctly

## 📞 Support
If you encounter any issues, check:
1. GitHub Actions logs
2. Browser console for errors
3. Network tab for failed requests

---

**Your café website will be live in minutes!** ☕