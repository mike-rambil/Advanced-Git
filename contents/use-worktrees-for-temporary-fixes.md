[⬅️ Back to How to Use git worktree Safely](https://github.com/mike-rambil/Advanced-Git/blob/main/contents/how-to-use-git-worktree-safely.md)

[⬆️ Previous Step: Switch Between Worktrees](https://github.com/mike-rambil/Advanced-Git/blob/main/contents/switch-between-worktrees.md)

# Use Worktrees for Temporary Fixes


![Category: Worktree](https://img.shields.io/badge/Category-Worktree-blue)

#### Command
```sh
git worktree add ../hotfix hotfix-branch
```

#### Examples
- **Quickly apply a fix on another branch without leaving your main branch.** 

 ```sh
git worktree add ../hotfix hotfix-branch 
 ```
- **Create a worktree for a bugfix branch.** 

 ```sh
git worktree add ../bugfix bugfix-branch 
 ```


#### Steps
1. Quickly apply a fix on another branch without leaving your main branch.


[➡️ See the Next Step: Flags and Their Uses](https://github.com/mike-rambil/Advanced-Git/blob/main/contents/flags-and-their-uses.md)

---

_Author: mike-rambil • Updated: 2024-06-10 • Tags: worktree, hotfix_
