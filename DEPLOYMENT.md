# Deployment Guide

This guide will walk you through deploying your Task Manager App to production.

## Prerequisites

- GitHub account
- Vercel account (free)
- Convex account (free)
- Your project pushed to GitHub

## Step 1: Set Up Convex for Production

1. **Install Convex CLI** (if not already installed)
   ```bash
   npm install -g convex
   ```

2. **Login to Convex**
   ```bash
   npx convex login
   ```

3. **Deploy Convex Functions**
   ```bash
   npx convex deploy
   ```
   
   This will:
   - Create a production Convex deployment
   - Provide you with a production `CONVEX_URL`
   - Deploy all your backend functions

4. **Note your production Convex URL**
   - Copy the URL provided after deployment
   - It will look like: `https://your-project-name.convex.cloud`

## Step 2: Push to GitHub

1. **Initialize Git** (if not already done)
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Task Manager App"
   ```

2. **Create GitHub Repository**
   - Go to [github.com](https://github.com)
   - Click "New repository"
   - Name it `task-manager-app`
   - Make it public
   - Don't initialize with README (we already have one)

3. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/task-manager-app.git
   git branch -M main
   git push -u origin main
   ```

## Step 3: Deploy to Vercel

1. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign up/login with your GitHub account

2. **Import Project**
   - Click "New Project"
   - Import your `task-manager-app` repository
   - Vercel will auto-detect it's a Next.js project

3. **Configure Environment Variables**
   - In the deployment settings, add:
     ```
     NEXT_PUBLIC_CONVEX_URL=https://your-production-convex-url.convex.cloud
     ```
   - Use the production URL from Step 1

4. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete (usually 2-3 minutes)
   - You'll get a live URL like: `https://task-manager-app-username.vercel.app`

## Step 4: Test Your Deployment

1. **Visit your live site**
2. **Test the following:**
   - Sign up with a new account
   - Sign in with existing account
   - Create tasks
   - Mark tasks as complete
   - Delete tasks
   - Sign out

## Step 5: Update README

1. **Update the live demo link** in `README.md`:
   ```markdown
   [View Live Demo](https://your-actual-deployment-url.vercel.app)
   ```

2. **Commit and push the update**:
   ```bash
   git add README.md
   git commit -m "Update live demo link"
   git push
   ```

## Environment Variables Summary

### Development (.env.local)
```bash
NEXT_PUBLIC_CONVEX_URL=https://your-dev-convex-url.convex.cloud
```

### Production (Vercel)
```bash
NEXT_PUBLIC_CONVEX_URL=https://your-production-convex-url.convex.cloud
```

## Troubleshooting

### Common Issues

1. **"Convex client not configured" error**
   - Check that `NEXT_PUBLIC_CONVEX_URL` is set correctly
   - Ensure the URL starts with `https://`
   - Verify the Convex deployment is active

2. **Authentication not working**
   - Verify Convex Auth is properly configured
   - Check browser console for errors
   - Ensure Convex functions are deployed

3. **Build failures on Vercel**
   - Check the build logs in Vercel dashboard
   - Ensure all dependencies are in `package.json`
   - Verify TypeScript compilation locally

### Useful Commands

```bash
# Check Convex deployment status
npx convex status

# View Convex logs
npx convex logs

# Redeploy Convex functions
npx convex deploy

# Test build locally
npm run build
```

## Post-Deployment

1. **Monitor your app**
   - Check Vercel analytics
   - Monitor Convex dashboard for usage
   - Set up error tracking if needed

2. **Custom Domain** (optional)
   - In Vercel dashboard, go to your project
   - Click "Domains" tab
   - Add your custom domain

3. **Performance Optimization**
   - Enable Vercel Analytics
   - Monitor Core Web Vitals
   - Optimize images if needed

## Security Considerations

- Never commit `.env` files to Git
- Use environment variables for all secrets
- Regularly update dependencies
- Monitor for security vulnerabilities

---

**Congratulations! Your Task Manager App is now live! 🎉**