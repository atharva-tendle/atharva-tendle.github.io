# atharva-tendle.github.io

Personal portfolio and blog built with [Hugo](https://gohugo.io/) and [PaperMod](https://github.com/adityatelange/hugo-PaperMod).

## Local Development

```bash
# Install Hugo (macOS)
brew install hugo

# Run dev server
hugo server -D
```

Site will be available at `http://localhost:1313/`.

## Writing a New Post

```bash
hugo new blog/my-post-title.md
```

Edit the generated file in `content/blog/`. Set `draft: false` when ready to publish. For math support, add `math: true` to the frontmatter.

## Deployment

Pushes to `main`/`master` trigger a GitHub Actions build and deploy to GitHub Pages. Ensure the repo's Pages source is set to **GitHub Actions** in Settings.

## Structure

```
hugo.yaml                  # Site config
content/
  _index.md                # Homepage
  about.md                 # About page
  publications.md          # Publications page
  blog/                    # Blog posts
assets/css/extended/       # Custom CSS overrides
layouts/partials/          # KaTeX math support
static/assets/             # Profile image, CV
themes/PaperMod/           # Theme (git submodule)
```
