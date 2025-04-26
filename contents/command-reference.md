# Git Command Reference (Full List)

A comprehensive list of Git commands used in this project, formatted according to our standard.

## Table of Contents

- [Repository Management](#repository-management)
- [Branching and Merging](#branching-and-merging)
- [History and Inspection](#history-and-inspection)
- [Stashing and Cleaning](#stashing-and-cleaning)
- [Submodules](#submodules)
- [Advanced Configuration](#advanced-configuration)
- [Rewriting History](#rewriting-history)
- [Collaboration and Review](#collaboration-and-review)
- [Miscellaneous](#miscellaneous)

---

## Repository Management

### 📌 `git init --bare`

**Short Description:** Initialize a bare repository, typically used for remote repositories.

**Problem:** You need a central repository for collaboration, not a working directory.

**Solution:** Use `git init --bare` to create a repository that only stores Git data, suitable for remotes.

**Example:**

```sh
git init --bare my-repo.git
```

---

### 📌 `git clone --mirror <repository>`

**Short Description:** Clone a repository in mirror mode, including all refs and branches.

**Problem:** You want a full backup or migration of a repository, including all refs.

**Solution:** Use `git clone --mirror` for a complete copy.

**Example:**

```sh
git clone --mirror https://github.com/example/repo.git
```

---

## Branching and Merging

### 📌 `git branch -m <old-branch> <new-branch>`

**Short Description:** Rename a branch.

**Problem:** You want to change a branch name for clarity or convention.

**Solution:** Use `git branch -m` to rename.

**Example:**

```sh
git branch -m old-feature new-feature
```

---

### 📌 `git branch -d <branch>`

**Short Description:** Delete a branch that has been merged.

**Problem:** You want to clean up branches that are no longer needed.

**Solution:** Use `git branch -d` to delete merged branches.

**Example:**

```sh
git branch -d feature-branch
```

---

### 📌 `git branch -D <branch>`

**Short Description:** Force delete a branch that hasn't been merged.

**Problem:** You need to remove a branch regardless of its merge status.

**Solution:** Use `git branch -D` to force delete.

**Example:**

```sh
git branch -D old-branch
```

---

### 📌 `git checkout -b <new-branch>`

**Short Description:** Create and switch to a new branch.

**Problem:** You want to start work on a new feature or fix.

**Solution:** Use `git checkout -b` to create and switch in one step.

**Example:**

```sh
git checkout -b feature-x
```

---

### 📌 `git cherry-pick <commit>`

**Short Description:** Apply the changes from a specific commit onto the current branch.

**Problem:** You want to bring a specific change from another branch.

**Solution:** Use `git cherry-pick` to apply the commit.

**Example:**

```sh
git cherry-pick abc123
```

---

### 📌 `git rebase <branch>`

**Short Description:** Reapply commits on top of another base tip.

**Problem:** You want to update your branch with the latest changes from another branch.

**Solution:** Use `git rebase` to move your work on top of the latest base.

**Example:**

```sh
git rebase main
```

---

### 📌 `git merge --squash <branch>`

**Short Description:** Merge a branch, combining all commits into one.

**Problem:** You want a clean history with a single commit for a feature.

**Solution:** Use `git merge --squash` before merging.

**Example:**

```sh
git merge --squash feature-x
```

---

### 📌 `git merge --no-ff <branch>`

**Short Description:** Merge with a merge commit even if fast-forward is possible.

**Problem:** You want to preserve branch history.

**Solution:** Use `git merge --no-ff`.

**Example:**

```sh
git merge --no-ff feature-x
```

---

### 📌 `git stash branch <branch>`

**Short Description:** Create a new branch and apply the stashed changes.

**Problem:** You want to move your stashed work to a new branch.

**Solution:** Use `git stash branch`.

**Example:**

```sh
git stash branch new-feature
```

---

## History and Inspection

<!-- Add formatted commands for this section here, following the same pattern. -->

## Stashing and Cleaning

<!-- Add formatted commands for this section here, following the same pattern. -->

## Submodules

<!-- Add formatted commands for this section here, following the same pattern. -->

## Advanced Configuration

<!-- Add formatted commands for this section here, following the same pattern. -->

## Rewriting History

<!-- Add formatted commands for this section here, following the same pattern. -->

## Collaboration and Review

<!-- Add formatted commands for this section here, following the same pattern. -->

## Miscellaneous

### 📌 `git archive --format=zip --output=<file.zip> <tree-ish>`

**Short Description:** Create an archive of files from a named tree.

**Problem:** You want to export a snapshot of your repository as a zip file.

**Solution:** Use `git archive` to create a zip archive.

**Example:**

```sh
git archive --format=zip --output=repo.zip main
```

---

<!-- Add more miscellaneous commands here, following the same pattern. -->
