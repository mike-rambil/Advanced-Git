# How to Use git worktree Safely


#### Category
Worktree
> Work on multiple branches simultaneously without switching.

`git worktree` allows you to manage multiple working directories linked to a single Git repository. It helps developers work on multiple branches simultaneously without switching branches in the same directory.


#### Tags
 [1mworktree [0m,  [1mbranches [0m,  [1madvanced [0m

#### Author
mike-rambil

#### Last Updated
2024-06-10

---

### Subcommands
#### Check Existing Worktrees
- `git worktree list`

#### Examples
- **List all active worktrees.**

  ```sh
git worktree list
```


#### Steps
1. List all active worktrees.


#### Tags
 [1mworktree [0m,  [1mlist [0m

#### Author
mike-rambil

#### Last Updated
2024-06-10

#### Create a New Worktree
- `git worktree add <path> <branch>`

#### Examples
- **Create a new worktree for the feature branch.**

  ```sh
git worktree add ../feature-branch feature
```


#### Steps
1. Create a worktree linked to a specific branch.


#### Prerequisites
- The target path must not already be a git repository.


#### Tags
 [1mworktree [0m,  [1madd [0m

#### Author
mike-rambil

#### Last Updated
2024-06-10

#### Remove a Worktree
- `git worktree remove <worktree-path>`

#### Examples
- **Detach a worktree without deleting the files.**

  ```sh
git worktree remove ../feature-branch
```


#### Steps
1. Detach a worktree without deleting the files.


#### Warnings
- ⚠️ Make sure you have committed all changes before removing a worktree.


#### Tags
 [1mworktree [0m,  [1mremove [0m

#### Author
mike-rambil

#### Last Updated
2024-06-10

#### Switch Between Worktrees
- `cd <worktree-path>`

#### Examples
- **Switch to the worktree directory.**

  ```sh
cd ../feature-branch
```


#### Steps
1. Simply cd into the worktree directory to switch.


#### Tags
 [1mworktree [0m,  [1mswitch [0m

#### Author
mike-rambil

#### Last Updated
2024-06-10

#### Use Worktrees for Temporary Fixes
- `git worktree add ../hotfix hotfix-branch`

#### Examples
- **Quickly apply a fix on another branch without leaving your main branch.**

  ```sh
git worktree add ../hotfix hotfix-branch
```


#### Steps
1. Quickly apply a fix on another branch without leaving your main branch.


#### Tags
 [1mworktree [0m,  [1mhotfix [0m

#### Author
mike-rambil

#### Last Updated
2024-06-10

#### Flags and Their Uses

#### Flags
- `add`: Creates a new worktree for an existing branch.
- `-b`: Creates a new worktree with a new branch.
- `list`: Lists all active worktrees.
- `remove`: Detaches a worktree from the repo without deleting files.
- `prune`: Cleans up stale worktree references after manual deletion.
- `move`: Moves a worktree to a different location.


#### Tags
 [1mworktree [0m,  [1mflags [0m

#### Author
mike-rambil

#### Last Updated
2024-06-10

