[⬅️ Back to Git Command Reference (Full List)](./git-command-reference-full-list.md)

[⬆️ Previous Step: git init --bare](./git-init-bare.md)

# git clone --mirror <repository>


![Category: Repository Management](https://img.shields.io/badge/Category-Repository%20Management-blue)
> Clone a repository in mirror mode, including all refs and branches.


#### Command
```sh
git clone --mirror https://github.com/example/repo.git
```

#### Examples
- **Create a full backup or migration of a repository.**

```sh
git clone --mirror https://github.com/example/repo.git```
- **Mirror-clone a private repo using SSH.**

```sh
git clone --mirror git@github.com:org/repo.git```


#### Steps
1. Run `git clone --mirror <repository>` to create a full backup or migration.


---

_Author: mike-rambil • Updated: 2024-06-10 • Tags: clone, mirror, backup_
