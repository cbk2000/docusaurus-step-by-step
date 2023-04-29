---
sidebar_position: 2
---
# Docusaurus

## Preparations
Now, we initialize the `docusaurus` project itself.

Navigate to a path where you want to keep your code.

```bash
mkdir -p ~/code
cd ~/code
```

Initialize the `docusaurus` folder. Our project will be called `my-first-docusaurus`

```bash 
npx create-docusaurus@latest my-first-docusaurus classic
```
```
[INFO] Creating new Docusaurus project...
[INFO] Installing dependencies with npm...
npm WARN deprecated stable@0.1.8: Modern JS already guarantees Array#sort() is a stable sort, so this library is deprecated. See the compatibility table on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#browser_compatibility
npm WARN deprecated trim@0.0.1: Use String.prototype.trim() instead

added 1099 packages, and audited 1100 packages in 1m

202 packages are looking for funding
  run `npm fund` for details

22 vulnerabilities (4 moderate, 18 high)

To address issues that do not require attention, run:
  npm audit fix

Some issues need review, and may require choosing
a different dependency.

Run `npm audit` for details.
[SUCCESS] Created my-first-docusaurus.
[INFO] Inside that directory, you can run several commands:

  `npm start`
    Starts the development server.

  `npm run build`
    Bundles your website into static files for production.

  `npm run serve`
    Serves the built website locally.

  `npm deploy`
    Publishes the website to GitHub pages.

We recommend that you begin by typing:

  `cd my-first-docusaurus`
  `npm start`

Happy building awesome websites!
```

## Running Docusaurus
```bash
cd my-first-docusaurus
npm start
```
```

> my-first-docusaurus0.0.0 start
> docusaurus start

[INFO] Starting the development server...
[SUCCESS] Docusaurus website is running at: http://localhost:3000/

✔ Client
  Compiled successfully in 1.30s

client (webpack 5.81.0) compiled successfully
```
