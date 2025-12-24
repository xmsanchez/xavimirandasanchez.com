# Xavi Miranda Sánchez

Personal blog built with Hugo and vibe-coded using Cursor.

## Tech Stack

- **Hugo** (Extended) - Static Site Generator
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **GitHub Pages** - Hosting
- **Giscus** - Comments system

## Development

### Prerequisites

- Hugo Extended (latest version)
- Node.js 20+
- npm

**OR**

- Docker and Docker Compose

### Setup

#### Option 1: Local Development (without Docker)

1. Clone the repository:
```bash
git clone https://github.com/xavimirandasanchez/xavimirandasanchez.github.io.git
cd xavimirandasanchez.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

The site will be available at `http://localhost:1313`

#### Option 2: Docker Development

1. Clone the repository:
```bash
git clone https://github.com/xavimirandasanchez/xavimirandasanchez.github.io.git
cd xavimirandasanchez.github.io
```

2. Build the Docker image once (this may take a few minutes the first time):
```bash
make docker-build-image
# or
docker build -t xavi-portfolio-hugo:latest .
```

3. Start the development server:
```bash
docker-compose up
```

The site will be available at `http://localhost:1313`

**Note:** The first build may take several minutes to download Node.js. Subsequent runs will use the cached image and start instantly.

To stop the server:
```bash
docker-compose down
```

To rebuild the container (after dependency changes):
```bash
docker-compose up --build
```

### Build

#### Local Build

To build the site for production:

```bash
npm run build
```

The generated site will be in the `public/` directory.

#### Docker Build

To build using Docker:

```bash
docker-compose -f docker-compose.build.yml up
```

The generated site will be in the `public/` directory.

## Project Structure

```
.
├── .github/workflows/    # GitHub Actions workflows
├── archetypes/           # Content templates
├── assets/css/           # CSS source files
├── content/              # Site content
│   ├── blog/            # Blog posts
│   └── projects/        # Portfolio projects
├── layouts/             # Hugo templates
│   ├── _default/        # Default layouts
│   └── partials/       # Reusable components
├── static/              # Static assets
│   ├── images/         # Images
│   └── js/             # JavaScript files
└── hugo.toml           # Hugo configuration
```

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the `main` branch.

## License

All rights reserved. © 2024 Xavi Miranda Sánchez
