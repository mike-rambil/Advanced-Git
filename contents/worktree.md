## How to Use `git worktree` Safely

### 📑 Table of Contents

- [How to Use `git worktree` Safely](#how-to-use-git-worktree-safely)
  - [Step 1: Check Existing Worktrees](#step-1-check-existing-worktrees)
  - [Step 2: Create a New Worktree](#step-2-create-a-new-worktree)
  - [Step 3: Remove a Worktree](#step-3-remove-a-worktree)
  - [Step 4: Switch Between Worktrees](#step-4-switch-between-worktrees)
  - [Step 5: Use Worktrees for Temporary Fixes](#step-5-use-worktrees-for-temporary-fixes)

---

`git worktree` allows you to have multiple working directories linked to a single Git repository. This is useful when you need to work on multiple branches simultaneously without switching branches in the same directory.

### Step 1: Check Existing Worktrees

To see all active worktrees in your repository, use:

```bash
git worktree list
```

This will output a list of worktrees with their paths and branches.

### Step 2: Create a New Worktree

To create a new worktree for a branch, run:

```bash
git worktree add <path> <branch>
```

Example:

```bash
git worktree add ../feature-branch feature
```

This creates a new directory ../feature-branch/ and checks out the feature branch inside it.

If the branch does not exist, add -b to create it:

```bash
git worktree add -b new-feature ../new-feature-branch
```

### Step 3: Remove a Worktree

To remove a worktree (detach it from the repository), first remove the directory manually, then prune it:

```bash
rm -rf <worktree-path>
git worktree prune
```

Example:

```bash
rm -rf ../feature-branch
git worktree prune
```

### Step 4: Switch Between Worktrees

Simply change directories to the worktree you want to work in:

```bash
cd ../feature-branch
```

You can now work on this branch independently of the main repository directory.

###🔹 Detach a Worktree Without Deleting It

```bash
git worktree remove <worktree-path>
```

Example:

```bash
git worktree remove ../feature-branch
```

### Step 5: Use Worktrees for Temporary Fixes

You can use worktrees to quickly fix bugs on a different branch without switching from your main working directory:

```bash
git worktree add ../hotfix hotfix-branch
cd ../hotfix
# Apply fix
git commit -am "Fixed urgent bug"
git push origin hotfix-branch
cd ../main-repo
git worktree remove ../hotfix

``
```
