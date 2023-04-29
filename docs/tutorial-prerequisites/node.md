---
sidebar_position: 1
---
# NodeJS

`nodejs` comes in many versions. As of writing, the current `lts` release is `v.18.16.0`

We will assume you are using a debian-based linux distro.

## Installation

### Dependencies 

To ensure global compatibility, use `nvm`. Install dependencies:

```bash
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install coreutils
```
### `nvm`
Install `nvm`
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

List available `nodejs` versions:
```bash
nvm ls-remote
```
```bash
...
       v18.10.0
       v18.11.0
       v18.12.0   (LTS: Hydrogen)
       v18.12.1   (LTS: Hydrogen)
       v18.13.0   (LTS: Hydrogen)
       v18.14.0   (LTS: Hydrogen)
       v18.14.1   (LTS: Hydrogen)
       v18.14.2   (LTS: Hydrogen)
       v18.15.0   (LTS: Hydrogen)
       v18.16.0   (Latest LTS: Hydrogen)
        v19.0.0
        v19.0.1
        v19.1.0
...
```
Install desired version
```bash
nvm install v18.16.0
```
```
Downloading and installing node v18.16.0...
Local cache found: ${NVM_DIR}/.cache/bin/node-v18.16.0-linux-x64/node-v18.16.0-linux-x64.tar.xz
Computing checksum with sha256sum
Checksums do not match: '5e3c27ce4856304263c3dcce8c725189394d6ad7fb3dafeaf16507cb774f52d0' found, '44d93d9b4627fe5ae343012d855491d62c7381b236c347f7666a7ad070f26548' expected.
Checksum check failed!
Removing the broken local cache...
Downloading https://nodejs.org/dist/v18.16.0/node-v18.16.0-linux-x64.tar.xz...
############################################################################################# 100.0%
Computing checksum with sha256sum
Checksums matched!
Now using node v18.16.0 (npm v9.5.1)
```
Check node installation with
```bash
node -v
```
```
v18.16.0
```

Ensure `npm`, `node`'s package manager, is also available.
```bash
which npm
```
```
/home/francis/.nvm/versions/node/v18.16.0/bin/npm
```
Continue to the next section.