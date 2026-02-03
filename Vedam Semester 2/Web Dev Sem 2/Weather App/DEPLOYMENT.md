# Vercel Deployment Guide

## Quick Start

1. **Install Vercel CLI** (Optional)
   ```bash
   npm install -g vercel
   ```

2. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Add Vercel deployment files"
   git push
   ```

3. **Deploy via Vercel Dashboard**
   - Go to https://vercel.com
   - Sign in with GitHub
   - Click "New Project"
   - Select your repository
   - Click "Deploy"

## Or Deploy via CLI

1. Run in terminal:
   ```bash
   vercel
   ```

2. Follow the prompts and your app will be live!

## Configuration

The `vercel.json` file is already configured to:
- Serve static files
- Handle client-side routing
- Rewrite all routes to `app.html`

## Environment Variables

If you need to change the API key, update it in `app.js`:
```javascript
const API_KEY = "3ffa041182664e06b5f44837262301";
```

## Notes

- This is a static site with no backend
- All weather data comes from WeatherAPI
- No build step is needed
- The app works instantly after deployment
