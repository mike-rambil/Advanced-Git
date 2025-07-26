[⬅️ Back to Useful Rare Git Commands You Never Heard Of](https://github.com/mike-rambil/Advanced-Git/blob/main/contents/useful-rare-git-commands-you-never-heard-of.md)

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


[➡️ Continue to Next Topic: How to Use git push --force-with-lease Safely](https://github.com/mike-rambil/Advanced-Git/blob/main/contents/how-to-use-git-push-force-with-lease-safely.md)

---

_Author: mike-rambil • Updated: 2024-06-10 • Tags: replace, history_
