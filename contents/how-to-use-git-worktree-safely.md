# How to Use git worktree Safely


#### Category
Worktree
> Work on multiple branches simultaneously without switching.

`git worktree` allows you to manage multiple working directories linked to a single Git repository. It helps developers work on multiple branches simultaneously without switching branches in the same directory.


#### Tags
`worktree`, `branches`, `advanced`

#### Author
mike-rambil

#### Last Updated
2024-06-10

---

### Subcommands
#### Check Existing Worktrees

#### Command
```sh
git worktree list
```

#### Examples
- **List all active worktrees.**


```sh
git worktree list
```


#### Steps
1. List all active worktrees.


#### Tags
`worktree`, `list`

#### Author
mike-rambil

#### Last Updated
2024-06-10

#### Create a New Worktree

#### Command
```sh
git worktree add <path> <branch>
```

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
`worktree`, `add`

#### Author
mike-rambil

#### Last Updated
2024-06-10

#### Remove a Worktree

#### Command
```sh
git worktree remove <worktree-path>
```

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
`worktree`, `remove`

#### Author
mike-rambil

#### Last Updated
2024-06-10

#### Switch Between Worktrees

#### Command
`cd <worktree-path>`

#### Examples
- **Switch to the worktree directory.**


```sh
cd ../feature-branch
```


#### Steps
1. Simply cd into the worktree directory to switch.


#### Tags
`worktree`, `switch`

#### Author
mike-rambil

#### Last Updated
2024-06-10

#### Use Worktrees for Temporary Fixes

#### Command
```sh
git worktree add ../hotfix hotfix-branch
```

#### Examples
- **Quickly apply a fix on another branch without leaving your main branch.**


```sh
git worktree add ../hotfix hotfix-branch
```


#### Steps
1. Quickly apply a fix on another branch without leaving your main branch.


#### Tags
`worktree`, `hotfix`

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
`worktree`, `flags`

#### Author
mike-rambil

#### Last Updated
2024-06-10

