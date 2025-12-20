# Netlify Deployment Guide

This guide will help you deploy the Specialized Bioinformatics Training Program (SBTP) website to Netlify.

## Prerequisites

- A [Netlify account](https://app.netlify.com/signup) (free)
- Git repository (GitHub, GitLab, or Bitbucket)
- Node.js 18 or higher installed locally

## Deployment Steps

### Option 1: Deploy via Netlify UI (Recommended)

1. **Push your code to Git**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Log in to [Netlify](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose your Git provider (GitHub/GitLab/Bitbucket)
   - Select your repository

3. **Configure Build Settings**
   The settings are already configured in `netlify.toml`:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: 18

4. **Deploy**
   - Click "Deploy site"
   - Netlify will automatically build and deploy your site
   - You'll get a URL like `https://random-name.netlify.app`

5. **Custom Domain (Optional)**
   - Go to Site Settings → Domain management
   - Click "Add custom domain"
   - Follow the instructions to configure your DNS

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Initialize Netlify**
   ```bash
   netlify init
   ```

4. **Deploy**
   ```bash
   # Build the project
   npm run build

   # Deploy to production
   netlify deploy --prod
   ```

### Option 3: Drag and Drop Deploy

1. **Build locally**
   ```bash
   npm install
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [Netlify Drop](https://app.netlify.com/drop)
   - Drag and drop the `dist` folder
   - Your site will be live instantly!

## Configuration Files

### `netlify.toml`
This file contains all deployment configuration:
- Build command and publish directory
- Node version
- Redirect rules for SPA routing
- Security and performance headers
- Cache control for assets

### `public/_redirects`
Backup redirect configuration for client-side routing.

## Environment Variables

If you need to add environment variables (like API keys):

1. Go to Site Settings → Environment variables
2. Add your variables:
   - Key: `VITE_API_KEY`
   - Value: Your API key

Note: Vite requires environment variables to be prefixed with `VITE_`

## Post-Deployment

### Verify Deployment
1. Check that all pages load correctly
2. Test navigation links
3. Verify images and assets load
4. Test contact forms (if any)
5. Check mobile responsiveness

### Custom Domain Setup
1. Purchase a domain from any registrar
2. In Netlify: Site Settings → Domain management
3. Add custom domain
4. Update DNS records at your registrar:
   - Add A record or CNAME record as instructed
   - Wait for DNS propagation (up to 48 hours)

### Enable HTTPS
- Netlify automatically provides free SSL certificates
- HTTPS will be enabled automatically once domain is configured

## Continuous Deployment

Once connected to Git, Netlify will:
- Automatically deploy when you push to main branch
- Create preview deployments for pull requests
- Provide deploy previews for testing

## Performance Optimizations

The site is configured with:
- ✅ Cache control headers for static assets
- ✅ Security headers (X-Frame-Options, CSP, etc.)
- ✅ Automatic image optimization
- ✅ CDN distribution worldwide
- ✅ HTTP/2 support

## Monitoring

- **Analytics**: Enable Netlify Analytics in Site Settings
- **Forms**: If you add forms, enable Netlify Forms
- **Functions**: Deploy serverless functions if needed

## Troubleshooting

### Build Fails
- Check build logs in Netlify dashboard
- Verify Node version matches (18+)
- Clear cache and retry: `netlify build --clear-cache`

### 404 Errors
- Ensure `_redirects` file is in `public/` folder
- Check `netlify.toml` redirect rules

### Assets Not Loading
- Check file paths are relative
- Verify assets are in `public/` folder
- Check console for CORS errors

## Support

- [Netlify Documentation](https://docs.netlify.com)
- [Netlify Community](https://answers.netlify.com)
- [Vite Documentation](https://vitejs.dev)

## Quick Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to Netlify (requires CLI)
netlify deploy --prod
```

---

**Project**: Specialized Bioinformatics Training Program (SBTP)
**Organization**: DeepBio Limited
**Framework**: React + TypeScript + Vite
**Hosting**: Netlify
