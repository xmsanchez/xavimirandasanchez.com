# Setup Guide

This guide will help you complete the setup and start using your Hugo portfolio site.

## Prerequisites

1. **Install Hugo Extended**
   - Download from: https://gohugo.io/installation/
   - Make sure to install the **Extended** version (required for PostCSS support)
   - Verify installation: `hugo version`

2. **Install Node.js**
   - Download from: https://nodejs.org/ (version 20 or higher)
   - Verify installation: `node --version` and `npm --version`

## Initial Setup

1. **Install npm dependencies:**
   ```bash
   npm install
   ```

2. **Configure Giscus:**
   - Visit https://giscus.app
   - Connect your GitHub repository
   - Enable GitHub Discussions if prompted
   - Copy the `repo_id` and `category_id` from the configuration
   - Update `hugo.toml`:
     ```toml
     [params.giscus]
       repo_id = "YOUR_REPO_ID"
       category_id = "YOUR_CATEGORY_ID"
     ```

3. **Update social links in `hugo.toml`:**
   - Update GitHub, LinkedIn, and email URLs in `[params.social]` section

## Development

Start the development server:

```bash
npm run dev
```

Or using Hugo directly:

```bash
hugo server -D
```

The site will be available at `http://localhost:1313`

## Creating Content

### Create a Blog Post

```bash
hugo new blog/2024/01/my-first-post/index.md
```

This creates a page bundle. Add images to the same directory.

### Create a Project

```bash
hugo new projects/my-project/index.md
```

Add screenshots/images to the project directory.

### Edit the About Page

Edit `content/about.md` with your professional information.

## Building for Production

```bash
npm run build
```

Or:

```bash
hugo --minify
```

The generated site will be in the `public/` directory.

## Deployment

The site is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

1. Push your code to GitHub
2. GitHub Actions will automatically build and deploy
3. Enable GitHub Pages in your repository settings (set to `gh-pages` branch)
4. Your site will be available at `https://xavimirandasanchez.github.io`

## Next Steps

1. ✅ Install Hugo Extended and Node.js
2. ✅ Run `npm install`
3. ✅ Configure Giscus
4. ✅ Update social links
5. ⏳ Write About page content
6. ⏳ Create initial blog posts
7. ⏳ Create portfolio projects
8. ⏳ Add images and optimize them
9. ⏳ Test locally
10. ⏳ Push to GitHub and verify deployment

