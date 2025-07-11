[⬅️ Back to How to Use git worktree Safely](./how-to-use-git-worktree-safely.md)

[⬆️ Previous Step: Check Existing Worktrees](./check-existing-worktrees.md)

# Create a New Worktree


![Category: Worktree](https://img.shields.io/badge/Category-Worktree-blue)

#### Command
```sh
git worktree add <path> <branch>
```

#### Examples
- **Create a new worktree for the feature branch.** 

 ```sh
git worktree add ../feature-branch feature```
- **Create a worktree for a hotfix branch.** 

 ```sh
git worktree add ../hotfix hotfix-branch```


#### Steps
1. Create a worktree linked to a specific branch.


#### Prerequisites
- The target path must not already be a git repository.


[➡️ See the Next Step: Remove a Worktree](./remove-a-worktree.md)

---

_Author: mike-rambil • Updated: 2024-06-10 • Tags: worktree, add_
