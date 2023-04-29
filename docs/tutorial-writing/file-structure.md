---
sidebar_position: 1
---
# File Structure

The following is the file structure of a `docusaurus` directory
```bash title="tree my-first-docusaurus"
.
├── babel.config.js
├── blog
│   ├── 2019-05-28-first-blog-post.md
│   ├── 2019-05-29-long-blog-post.md
│   ├── 2021-08-01-mdx-blog-post.mdx
│   ├── 2021-08-26-welcome
│   │   ├── docusaurus-plushie-banner.jpeg
│   │   └── index.md
│   └── authors.yml
├── docs
│   ├── intro.md
│   ├── tutorial-basics
│   │   ├── _category_.json
│   │   ├── congratulations.md
│   │   ├── create-a-blog-post.md
│   │   ├── create-a-document.md
│   │   ├── create-a-page.md
│   │   ├── deploy-your-site.md
│   │   └── markdown-features.mdx
│   └── tutorial-extras
│       ├── _category_.json
│       ├── img
│       │   ├── docsVersionDropdown.png
│       │   └── localeDropdown.png
│       ├── manage-docs-versions.md
│       └── translate-your-site.md
├── docusaurus.config.js
├── package.json
├── package-lock.json
├── README.md
├── sidebars.js
├── src
│   ├── components
│   │   └── HomepageFeatures
│   │       ├── index.js
│   │       └── styles.module.css
│   ├── css
│   │   └── custom.css
│   └── pages
│       ├── index.js
│       ├── index.module.css
│       └── markdown-page.md
└── static
    └── img
        ├── docusaurus.png
        ├── docusaurus-social-card.jpg
        ├── favicon.ico
        ├── logo.svg
        ├── undraw_docusaurus_mountain.svg
        ├── undraw_docusaurus_react.svg
        └── undraw_docusaurus_tree.svg
```