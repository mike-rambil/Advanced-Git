[⬅️ Back to Table of Contents](https://github.com/mike-rambil/Advanced-Git/blob/main/README.md#how-to-use-git-push-force-with-lease-safely)

# How to Use git push --force-with-lease Safely


![Category: Collaboration](https://img.shields.io/badge/Category-Collaboration-blue)
> Safely force-push to a branch without overwriting others' work.

Guide to using `git push --force-with-lease` to avoid overwriting others' work when force-pushing.


#### Command
```sh
git push --force-with-lease
```

#### Examples
- **Safely force-push your changes.** 

 ```sh
git push --force-with-lease 
 ```
- **Force-push a specific branch with lease protection.** 

 ```sh
git push --force-with-lease origin feature-branch 
 ```


#### Steps
1. Fetch the latest changes: `git fetch origin`
2. Push with lease: `git push --force-with-lease`
3. If rejected, pull and rebase: `git pull --rebase origin main`
4. Resolve conflicts, commit, and retry push


#### Prerequisites
- You must have permission to push to the branch.


#### Warnings
- ⚠️ Never use `--force` unless you are sure. Prefer `--force-with-lease`.


#### Links
- [Medium Article](https://medium.com/@sahilsahilbhatia/git-push-force-with-lease-vs-force-ecae72601e80)


[➡️ Continue to Next Topic: Past commits of a specific file](https://github.com/mike-rambil/Advanced-Git/blob/main/contents/past-commits-of-a-specific-file.md)

---

_Author: mike-rambil • Updated: 2024-06-10 • Tags: push, force, safe_
