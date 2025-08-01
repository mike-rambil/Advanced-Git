[⬅️ Back to Git Command Reference (Full List)](https://github.com/mike-rambil/Advanced-Git/blob/main/contents/git-command-reference-full-list.md)

# git init --bare


![Category: Repository Management](https://img.shields.io/badge/Category-Repository%20Management-blue)
> Initialize a bare repository, typically used for remote repositories.


#### Command
```sh
git init --bare my-repo.git
```

#### Examples
- **Create a bare repository for collaboration.** 

 ```sh
git init --bare my-repo.git 
 ```
- **Initialize a bare repo in a custom directory for server hosting.** 

 ```sh
git init --bare /srv/git/project.git 
 ```


#### Steps
1. Run `git init --bare my-repo.git` to create a bare repository.


[➡️ See the Next Step: git clone --mirror <repository>](https://github.com/mike-rambil/Advanced-Git/blob/main/contents/git-clone-mirror-repository.md)

---

_Author: mike-rambil • Updated: 2024-06-10 • Tags: init, bare, repository_
