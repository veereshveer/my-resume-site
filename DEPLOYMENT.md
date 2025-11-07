# GitLab Pages Deployment Guide

This guide will help you deploy your resume website to GitLab Pages.

## Quick Start

1. **Create a GitLab account** (if you don't have one):
   - Go to [gitlab.com](https://gitlab.com)
   - Sign up for a free account

2. **Create a new repository**:
   - Click "New project" → "Create blank project"
   - Choose a project name (e.g., `my-resume`)
   - Set visibility to Public or Private (both work with Pages)
   - Initialize with README: No (we already have one)

3. **Push your code to GitLab**:

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: Professional resume website"

# Add GitLab as remote origin (replace with your repository URL)
git remote add origin https://gitlab.com/<your-username>/<your-project-name>.git

# Push to GitLab
git branch -M main
git push -u origin main
```

4. **Wait for the pipeline to complete**:
   - Go to your project in GitLab
   - Click "CI/CD" → "Pipelines"
   - Wait for the build and deploy stages to complete (usually 2-3 minutes)
   - You'll see a green checkmark when it's done

5. **Access your website**:
   - Go to "Settings" → "Pages" in your GitLab project
   - You'll see your website URL: `https://<your-username>.gitlab.io/<project-name>`
   - Click the link to view your live resume!

## Custom Domain (Optional)

If you want to use your own domain (e.g., `resume.yourname.com`):

1. Go to "Settings" → "Pages" in your GitLab project
2. Click "New Domain"
3. Enter your domain name
4. Add the DNS records shown to your domain provider
5. Wait for DNS propagation (can take up to 24 hours)

### DNS Configuration Example

Add these records to your domain provider:

```
Type: A
Name: resume (or @)
Value: 35.185.44.232

Type: TXT
Name: _gitlab-pages-verification-code.resume
Value: <verification-code-from-gitlab>
```

## Updating Your Resume

Whenever you want to update your resume:

1. Edit the resume data in `client/src/data/resumeData.ts`
2. Commit and push your changes:

```bash
git add .
git commit -m "Update resume content"
git push
```

3. GitLab will automatically rebuild and redeploy your site (2-3 minutes)

## Troubleshooting

### Pipeline Fails

If your pipeline fails:

1. Check the pipeline logs:
   - Go to "CI/CD" → "Pipelines"
   - Click on the failed pipeline
   - Review the error messages

2. Common issues:
   - **Node version**: Make sure `.gitlab-ci.yml` uses Node 20
   - **Build errors**: Test the build locally with `npm run build`
   - **Missing files**: Ensure all files are committed to git

### Page Not Loading

If your page doesn't load after deployment:

1. Check that the pipeline completed successfully
2. Wait a few minutes for DNS/CDN propagation
3. Try accessing in incognito mode (to bypass cache)
4. Check "Settings" → "Pages" for the correct URL

### Customization Not Showing

If your changes don't appear:

1. Clear your browser cache
2. Verify changes are in the git repository
3. Check that the pipeline ran after your push
4. Use incognito mode to view the latest version

## Advanced Configuration

### Base Path Configuration

If your site is not at the root domain (e.g., `username.gitlab.io/project-name`):

1. Update `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/project-name/', // Add your project name
  // ... rest of config
});
```

2. Commit and push:

```bash
git add vite.config.ts
git commit -m "Configure base path for GitLab Pages"
git push
```

### Environment Variables

To add environment variables:

1. Go to "Settings" → "CI/CD" → "Variables"
2. Add your variables
3. They'll be available during the build process

## Cost

GitLab Pages is **100% FREE** for:
- Unlimited public projects
- Unlimited bandwidth
- Custom domains
- HTTPS/SSL certificates

## Support

For GitLab Pages specific issues:
- [GitLab Pages Documentation](https://docs.gitlab.com/ee/user/project/pages/)
- [GitLab Community Forum](https://forum.gitlab.com/)

For resume website issues:
- Check the README.md file
- Review the code in the repository
