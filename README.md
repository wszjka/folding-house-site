# FoldingSpace Living Website

A premium folding house manufacturer's static website built with Next.js 14 and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **Deployment**: GitHub Pages (static export)

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
# Generate static export
npm run build
```

The static files will be output to the `out/` directory.

## GitHub Pages Deployment

### Option 1: Deploy to `username.github.io` (root domain)

1. Create a repository named `username.github.io`
2. Push the contents of `out/` directory to the `main` branch
3. Your site will be available at `https://username.github.io`

### Option 2: Deploy to subpath (`username.github.io/repo-name`)

1. Edit `next.config.js` and uncomment/modify:
   ```javascript
   basePath: '/repo-name',
   assetPrefix: '/repo-name/',
   ```

2. Rebuild:
   ```bash
   npm run build
   ```

3. Push the `out/` directory contents to your repository's `gh-pages` branch

4. Enable GitHub Pages in repository settings (Source: `gh-pages` branch)

### Automated Deployment (GitHub Actions)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - run: npm ci
      - run: npm run build
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

## Project Structure

```
foldinghouse/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Homepage
│   │   ├── products/       # Products page
│   │   └── contact/        # Contact page
│   └── components/
│       ├── Navbar.tsx      # Navigation component
│       └── Footer.tsx      # Footer component
├── public/
│   ├── images/
│   │   ├── bg-texture.jpg  # Background texture
│   │   └── products/       # Product images
│   └── .nojekyll           # GitHub Pages config
├── next.config.js
├── tailwind.config.ts
└── package.json
```

## Adding Product Images

Place your product images in `public/images/products/`:

- `dual-wing.jpg` - Dual-Wing Folding House
- `apple-cabin.jpg` - Apple Cabin
- `space-capsule.jpg` - Space Capsule

Recommended image specs:
- Aspect ratio: 4:3
- Resolution: 1200x900px minimum
- Format: JPG (optimized) or WebP
- File size: < 200KB each

## License

© 2026 FoldingSpace Living. All rights reserved.
