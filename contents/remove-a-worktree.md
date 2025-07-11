[⬅️ Back to How to Use git worktree Safely](./how-to-use-git-worktree-safely.md)

[⬆️ Previous Step: Create a New Worktree](./create-a-new-worktree.md)

# Remove a Worktree


![Category: Worktree](https://img.shields.io/badge/Category-Worktree-blue)

#### Command
```sh
git worktree remove <worktree-path>
```

#### Examples
- **Detach a worktree without deleting the files.**

git worktree remove ../feature-branch
- **Remove a hotfix worktree.**

git worktree remove ../hotfix


#### Steps
1. Detach a worktree without deleting the files.


#### Warnings
- ⚠️ Make sure you have committed all changes before removing a worktree.


[➡️ See the Next Step: Switch Between Worktrees](./switch-between-worktrees.md)

---

_Author: mike-rambil • Updated: 2024-06-10 • Tags: worktree, remove_
