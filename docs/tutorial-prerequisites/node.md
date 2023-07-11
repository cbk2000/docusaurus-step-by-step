---
sidebar_position: 1
---
# NodeJS

## Installation

### Dependencies 

1. Change user to super user
```bash
su -
```

2. Get dependencies
```bash
apt-get update
apt-get upgrade
apt-get install coreutils
```
### `nvm`
Install `nvm`
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

Install latest version 
#### (By now the latest stable version of Node is v18.16.0)
```bash
nvm install v18.16.0
```
Check node installation with
```bash
node -v
```
Output:
```
v18.16.0
```

Ensure `npm`, `node`'s package manager, is also available.
```bash
which npm
```

### Set up pnpm
```
sudo mkdir -p /usr/local/pnpm-global-store
sudo chmod -R 777 /usr/local/pnpm-global-store

pnpm config set store-dir /usr/local/pnpm-global-store
```