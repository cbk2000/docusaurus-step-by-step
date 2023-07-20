---
sidebar_position: 1
---
# SOP Developer

Case: adding "SandBox/" directory with ```git clone``` in [docubase](https://github.com/cbk2000/docubase)

### Clone the project
```bash
git clone git@github.com:cbk2000/docubase.git
```

### Enter the project
```bash
cd docubase
```

### Setup local development

#### Disable CRLF EOF
```bash
git config --global core.autocrlf false
```
#### Install Dependencies
```bash
yarn
```

### Create new branch
```bash
git checkout -b feat/sandbox
```

### Create SandBox Directory
```bash
mkdir SandBox
```

### Create file in the SandBox Directory
```bash
cd SandBox
touch README.md
```
***Needed so that git keeps track of the changes, empty directories by default will get ignored by git**

### Push changes
```bash
git add .
git commit -m "Added SandBox Directory in Root"
git push origin feat/sandbox
```