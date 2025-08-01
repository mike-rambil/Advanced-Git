[⬅️ Back to How to Use git worktree Safely](https://github.com/mike-rambil/Advanced-Git/blob/main/contents/how-to-use-git-worktree-safely.md)

[⬆️ Previous Step: Create a New Worktree](https://github.com/mike-rambil/Advanced-Git/blob/main/contents/create-a-new-worktree.md)

# Remove a Worktree


![Category: Worktree](https://img.shields.io/badge/Category-Worktree-blue)

#### Command
```sh
git worktree remove <worktree-path>
```

#### Examples
- **Detach a worktree without deleting the files.** 

 ```sh
git worktree remove ../feature-branch 
 ```
- **Remove a hotfix worktree.** 

 ```sh
git worktree remove ../hotfix 
 ```


#### Steps
1. Detach a worktree without deleting the files.


#### Warnings
- ⚠️ Make sure you have committed all changes before removing a worktree.


[➡️ See the Next Step: Switch Between Worktrees](https://github.com/mike-rambil/Advanced-Git/blob/main/contents/switch-between-worktrees.md)

---

_Author: mike-rambil • Updated: 2024-06-10 • Tags: worktree, remove_
