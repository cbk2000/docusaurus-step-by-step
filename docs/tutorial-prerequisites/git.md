---
sidebar_position: 3
---
# Git

## Initialize as git repository

### Link to remote repository
``` bash
git init
git remote add origin [Repository Link with SSH here]
git remote -v
```

### Push changes to Remote Repository
```bash
git add .
git commit -m "commit message here"
git push origin master
```