# Xavi Miranda Sánchez

Personal blog built with Hugo and Tailwind CSS, deployed to GitHub Pages. Comments by Giscus.

## Requirements

- Hugo Extended >= 0.158
- Node.js 20+

## Development

```bash
npm install
npm run dev     # Tailwind watch + Hugo server on http://localhost:1313
npm run build   # production build into public/
```

`static/css/main.css` is generated from `assets/css/main.css` by Tailwind and is not committed.

## Content

```bash
hugo new blog/2026/01/my-post/index.md
```

Blog posts live in `content/blog/`, projects in `content/projects/` (front matter: `project_type`, `status`, `tech_stack`, `repo_url`, `demo_url`, `featured`).

## Deployment

Pushing to `main` builds the site (Tailwind, then Hugo) and deploys it with GitHub Actions to GitHub Pages. In the repository settings, Pages must use **GitHub Actions** as its source.
