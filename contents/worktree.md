## 📌 How to Use `git worktree` Safely  

### 📑 Table of Contents  

  - [📌 What does it do?](#-what-does-it-do?)  
  - [🔹 Step 1: Check Existing Worktrees](#-step-1-check-existing-worktrees)  
  - [🔹 Step 2: Create a New Worktree](#-step-2-create-a-new-worktree)  
  - [🔹 Step 3: Remove a Worktree](#-step-3-remove-a-worktree)  
  - [🔹 Step 4: Switch Between Worktrees](#-step-4-switch-between-worktrees)  
  - [🔹 Step 5: Use Worktrees for Temporary Fixes](#-step-5-use-worktrees-for-temporary-fixes)  
  - [🔹 Flags and Their Uses](#-flags-and-their-uses)  
  - [🔹 Tips & Tricks](#-tips--tricks)
  - [📗 Summary](#-summary)  

---

##📌 What does it do?  

`git worktree` allows you to manage multiple working directories linked to a single Git repository. It helps developers work on multiple branches simultaneously without switching branches in the same directory, reducing downtime and improving workflow efficiency.  

---

## 🔹 Step 1: Check Existing Worktrees  

To list all active worktrees:  

```bash
git worktree list
```

This displays worktree paths, branch names, and HEAD commit details.  

---

## 🔹 Step 2: Create a New Worktree  

To create a worktree linked to a specific branch:  

```bash
git worktree add <path> <branch>
```

Example:  

```bash
git worktree add ../feature-branch feature
```

This creates `../feature-branch/` and checks out the `feature` branch inside it.  

To create a worktree with a **new branch**:  

```bash
git worktree add -b new-feature ../new-feature-branch
```

This creates a new branch `new-feature` and checks it out in `../new-feature-branch/`.  

---

## 🔹 Step 3: Remove a Worktree  

To detach a worktree without deleting the files:  

```bash
git worktree remove <worktree-path>
```

Example:  

```bash
git worktree remove ../feature-branch
```

To completely delete a worktree:  

```bash
rm -rf <worktree-path>
git worktree prune
```

Example:  

```bash
rm -rf ../feature-branch
git worktree prune
```

---

## 🔹 Step 4: Switch Between Worktrees  

Since each worktree is a separate directory, simply `cd` into it:  

```bash
cd ../feature-branch
```

Now, you can work on this branch independently.  

---

## 🔹 Step 5: Use Worktrees for Temporary Fixes  

To quickly apply a fix on another branch without leaving your main branch:  

```bash
git worktree add ../hotfix hotfix-branch
cd ../hotfix
# Make changes
git commit -am "Fixed urgent bug"
git push origin hotfix-branch
cd ../main-repo
git worktree remove ../hotfix
```

This workflow is useful for hotfixes while keeping your main branch undisturbed.  

---

## 🔹 Flags and Their Uses  

- `git worktree add <path> <branch>` → Creates a new worktree for an existing branch.  
- `git worktree add -b <branch> <path>` → Creates a new worktree with a new branch.  
- `git worktree list` → Lists all active worktrees.  
- `git worktree remove <path>` → Detaches a worktree from the repo without deleting files.  
- `git worktree prune` → Cleans up stale worktree references after manual deletion.  
- `git worktree move <old-path> <new-path>` → Moves a worktree to a different location.  

---

## 🔹 Tips & Tricks  

### ✅ Keep Worktrees Outside the Main Repo  

To avoid clutter, store worktrees **outside** your main repository folder:  

```bash
git worktree add ../temp-branch temp-branch
```

This keeps your workspace clean.  

### ✅ Quickly Open Worktrees with `cd`  

Instead of switching branches, just `cd` into the worktree:  

```bash
cd ../feature-branch
```

No need for `git checkout`!  

### ✅ Prevent Accidental Worktree Deletion  

To avoid losing changes, always **commit** before deleting a worktree:  

```bash
git commit -am "Save progress"
git worktree remove ../feature-branch
```

### ✅ Use Worktrees for Code Reviews  

Instead of switching branches, create a separate worktree for reviewing code:  

```bash
git worktree add ../review PR-123
cd ../review
```

Now you can test the PR in isolation.  

### Summary
Using git worktree, you can manage multiple branches and features simultaneously without disrupting your main workspace. Whether you're fixing a bug, reviewing a pull request, or developing a new feature, worktrees provide an efficient, streamlined workflow that enhances productivity.


---

### 📖 [Tutorial](./contents/git-worktree.md)  

> [Checkout Tutorial Here](./contents/git-worktree.md)  
