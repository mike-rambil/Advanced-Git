[⬅️ Back to Useful Rare Git Commands You Never Heard Of](./useful-rare-git-commands-you-never-heard-of.md)

# git replace <old-commit> <new-commit>


![Category: History](https://img.shields.io/badge/Category-History-blue)
> Temporarily substitute one commit for another.


#### Command
```sh
git replace abc123 def456
```

#### Examples
- **Temporarily replace commit abc123 with def456.** 

 ```sh
git replace abc123 def456 
 ```
- **Graft a new parent onto a commit for testing history changes.** 

 ```sh
git replace --graft HEAD~2 HEAD 
 ```


#### Steps
1. Run `git replace <old-commit> <new-commit>` to test or patch history.


---

_Author: mike-rambil • Updated: 2024-06-10 • Tags: replace, history_
