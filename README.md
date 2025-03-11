> [!IMPORTANT]
> If you find a useful GIT command - be sure to sent a PR here as well :)


# Table of Contents

- [Table of Contents](#table-of-contents)
- [Advanced Git Commands](#advanced-git-commands)
  - [Latest](#latest)
- [📌 `git push --force-with-lease`](#-git-push---force-with-lease)
    - [🔹 Problem:](#-problem)
    - [🔹 Solution:](#-solution)
    - [🔹 Tutorial](#Tutorial)
- [Git Worktree Tutorial](#git-worktree-tutorial)
  - [📌 What is `git worktree`?](#-what-is-git-worktree)
  - [🔹 Check Existing Worktrees](#-check-existing-worktrees)
  - [🔹 Create a New Worktree](#-create-a-new-worktree)
  - [🔹 Remove a Worktree](#-remove-a-worktree)
  - [🔹 Switch Between Worktrees](#-switch-between-worktrees)
  - [🔹 Detach a Worktree Without Deleting It](#-detach-a-worktree-without-deleting-it)
  - [🔹 Use Worktrees for Temporary Fixes](#-use-worktrees-for-temporary-fixes)
- [How to Use Git Submodules by Setting Up a New Submodule Repository and Pushing to It](#how-to-use-git-submodules-by-setting-up-a-new-submodule-repository-and-pushing-to-it)
  - [Step 1: Create the Git Submodule Repository](#step-1-create-the-git-submodule-repository)
    - [1. Initialize the Submodule Repository](#1-initialize-the-submodule-repository)
    - [2. Host it on GitHub (or any remote)](#2-host-it-on-github-or-any-remote)
    - [3. Push the Bare Repo to Remote](#3-push-the-bare-repo-to-remote)
  - [Step 2: Add the Submodule to Another Repo](#step-2-add-the-submodule-to-another-repo)
    - [1. Initialize and Clone the Main Repository](#1-initialize-and-clone-the-main-repository)
    - [2. Add the Submodule](#2-add-the-submodule)
    - [3. Commit and Push](#3-commit-and-push)
  - [Step 3: Add Files and Push to the Submodule](#step-3-add-files-and-push-to-the-submodule)
    - [1. Navigate into the Submodule](#1-navigate-into-the-submodule)
    - [2. Add Files to the Submodule](#2-add-files-to-the-submodule)
    - [3. Push the Changes to the Submodule Repository](#3-push-the-changes-to-the-submodule-repository)
  - [Step 4: Commit the Updated Submodule in the Main Repo](#step-4-commit-the-updated-submodule-in-the-main-repo)
    - [1. Move Back to Main Repo](#1-move-back-to-main-repo)
    - [2. Stage and Commit the Submodule Update](#2-stage-and-commit-the-submodule-update)
  - [Step 5: Cloning and Initializing Submodules](#step-5-cloning-and-initializing-submodules)
    - [Summary](#summary)
  - [Difference Between `git submodule update --remote --merge` and `git submodule update --init --recursive`](#difference-between-git-submodule-update---remote---merge-and-git-submodule-update---init---recursive)
- [Delete Untracked Files and Folders](#delete-untracked-files-and-folders)
  - [1️⃣ Dry Run (Check What Will Be Deleted)](#1️⃣-dry-run-check-what-will-be-deleted)
  - [2️⃣ Delete Untracked Files and Folders](#2️⃣-delete-untracked-files-and-folders)
- [Repository Management](#repository-management)
- [Branching and Merging](#branching-and-merging)
- [History and Inspection](#history-and-inspection)
- [Stashing and Cleaning](#stashing-and-cleaning)
- [Submodules](#submodules)
- [Advanced Configuration](#advanced-configuration)
- [Rewriting History](#rewriting-history)
- [Collaboration and Review](#collaboration-and-review)
- [🛠 **View and Clean Up Local Git Branches**](#-view-and-clean-up-local-git-branches)
  - [**🐧 Bash**](#-bash)
  - [**🖥 PowerShell**](#-powershell)
- [Miscellaneous](#miscellaneous)
- [References & Resources](#references-&-resources)
- 
# Advanced Git Commands


## Latest

- `git push --force-with-lease` - [Cancels git push if someone else did a commit on the same remote branch and safe guards `git push`](https://medium.com/@sahilsahilbhatia/git-push-force-with-lease-vs-force-ecae72601e80)
- `git maintenance start` - [Runs a cronJob in background for the specified repo for periodic maintanence](https://git-scm.com/docs/git-maintenance)




## 📌 `git push --force-with-lease`

`git push --force-with-lease` ensures you don’t accidentally overwrite someone else’s work when force-pushing. It checks if the remote branch still matches what you last pulled. If someone else has pushed changes in the meantime, your push is rejected, preventing unintended data loss.

### 🔹 Problem:
When users are within the same branch and they want to push to remote but not sure if there is a commit pushed from the other dev that might block you

### 🔹 Solution:
use the ---force with lease flag while pushing to check it there is a push. If there is a push from the other person - your push to the same branch is cancelled.

### [Tutorial](./--force-with-lease.md)
> [Checkout Tutorial Here](./--force-with-lease.md)

## 📌 Git Worktree Tutorial
---
`git worktree` allows you to have multiple working directories linked to a single Git repository. This is useful when you need to work on multiple branches simultaneously without switching branches in the same directory.


## 🔹 Check Existing Worktrees

To see all active worktrees in your repository, use:

```bash
git worktree list
```

This will output a list of worktrees with their paths and branches.

## 🔹 Create a New Worktree

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

## 🔹 Remove a Worktree

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

## 🔹 Switch Between Worktrees

Simply change directories to the worktree you want to work in:

```bash
cd ../feature-branch
```

You can now work on this branch independently of the main repository directory.

## 🔹 Detach a Worktree Without Deleting It

```bash
git worktree remove <worktree-path>
```

Example:

```bash
git worktree remove ../feature-branch
```

## 🔹 Use Worktrees for Temporary Fixes

You can use worktrees to quickly fix bugs on a different branch without switching from your main working directory:

```bash
git worktree add ../hotfix hotfix-branch
cd ../hotfix
# Apply fix
git commit -am "Fixed urgent bug"
git push origin hotfix-branch
cd ../main-repo
git worktree remove ../hotfix

```

# How to Use Git Submodules by Setting Up a New Submodule Repository and Pushing to It

This guide walks you through:

- Creating a new Git submodule repository
- Adding it as a submodule in another repository
- Pushing files from the main repository to the submodule

---

## Step 1: Create the Git Submodule Repository

We need to create a new repository that will act as the submodule.

### 1. Initialize the Submodule Repository

```bash
mkdir my-submodule
cd my-submodule
git init --bare
```

This sets up an empty bare repository, meaning it will only store Git data and be used as a remote.

### 2. Host it on GitHub (or any remote)

- Go to GitHub (or GitLab/Bitbucket).
- Create a new repository named my-submodule.
- Copy the remote URL (e.g., <git@github.com>:your-user/my-submodule.git).

### 3. Push the Bare Repo to Remote

```bash
git remote add origin git@github.com:your-user/my-submodule.git
git push --set-upstream origin main
```

## Step 2: Add the Submodule to Another Repo

Now, let’s integrate this submodule into a main repository.

### 1. Initialize and Clone the Main Repository

```bash
mkdir main-repo
cd main-repo
git init
```

### 2. Add the Submodule

```bash
git submodule add git@github.com:your-user/my-submodule.git submodules/my-submodule
```

This clones the submodule into the submodules/my-submodule directory inside the main repo.

### 3. Commit and Push

```bash
git add .gitmodules submodules/my-submodule
git commit -m "Added submodule my-submodule"
git push origin main
```

## Step 3: Add Files and Push to the Submodule

Now, let’s add files to the submodule from the main repo.

### 1. Navigate into the Submodule

```bash
cd submodules/my-submodule
```

### 2. Add Files to the Submodule

```bash
echo "Hello from the submodule!" > file.txt
git add file.txt
git commit -m "Added file to submodule"
```

### 3. Push the Changes to the Submodule Repository

```bash
git push origin main
```

## Step 4: Commit the Updated Submodule in the Main Repo

Once the submodule has new changes, the main repository needs to recognize it.

### 1. Move Back to Main Repo

```bash
cd ../..
```

### 2. Stage and Commit the Submodule Update

```bash
git add submodules/my-submodule
git commit -m "Updated submodule to latest commit"
git push origin main
```

## Step 5: Cloning and Initializing Submodules

If you or someone else clones the main repo, you need to initialize the submodules:

```bash
git clone --recursive git@github.com:your-user/main-repo.git
```

or, if already cloned:

```bash
git submodule update --init --recursive
```

#### Summary

- ✅ Created a Git submodule repository
- ✅ Added it as a submodule to another repo
- ✅ Pushed files from the main repo into the submodule
- ✅ Updated the submodule reference in the main repo


## Difference Between `git submodule update --remote --merge` and `git submodule update --init --recursive`
Both commands update submodules, but they work differently.

✅ 1️⃣ `git submodule update --remote --merge`
```bash
git submodule update --remote --merge
```
📌 **What It Does:**
- Pulls the latest commit from the remote branch of the submodule.
- Merges that commit into your local submodule.
- Updates the submodule folder to match the latest remote version.

🛠 **When to Use It**
- When you want to fetch the latest changes from the submodule’s remote repo.
- Useful if the submodule is actively being updated and you want to sync with the latest version.

🚀 **Example**
- Your submodule (`whk-script-library`) is behind the remote repository.
- Running `git submodule update --remote --merge` fetches and merges the latest changes.
- The submodule now tracks the latest remote commit.

✅ 2️⃣ `git submodule update --init --recursive`
```bash
git submodule update --init --recursive
```
📌 **What It Does:**
- Ensures that all submodules are initialized (`--init`).
- Updates submodules to the exact commit referenced in the main repository.
- Recursively initializes nested submodules (`--recursive`).

🛠 **When to Use It**
- When you just cloned the main repository and need to fetch and initialize submodules.
- Ensures that all submodules match the commit stored in the main repo (even if they are outdated).
- Best for setting up a project that includes submodules.

🚀 **Example**
- You cloned `whk-wms`, but the `whk-script-library` submodule is empty.
- Running `git submodule update --init --recursive` initializes and updates it to the expected commit.
- The submodule now matches the commit tracked in the main repo, not necessarily the latest commit from the remote.


# Delete Untracked Files and Folders

To delete untracked files and folders, use the following methods:

Git provides `git clean` to safely remove **untracked files and directories**.

### 1️⃣ Dry Run (Check What Will Be Deleted)

First, run this to see what will be deleted:

```bash
git clean -n -d
```

### 2️⃣ Delete Untracked Files and Folders

If everything looks correct, run:

```bash
git clean -f -d
```

What this does:
-f → Forces deletion of untracked files.
-d → Deletes untracked directories (like data-loader/).

# Repository Management

- `git init --bare`: Initialize a bare repository, typically used for remote repositories.
- `git clone --mirror <repository>`: Clone a repository in mirror mode, including all refs and branches.

# Branching and Merging

- `git branch -m <old-branch> <new-branch>`: Rename a branch.
- `git branch -d <branch>`: Delete a branch that has been merged.
- `git branch -D <branch>`: Force delete a branch that hasn’t been merged.
- `git checkout -b <new-branch>`: Create and switch to a new branch.
- `git cherry-pick <commit>`: Apply the changes from a specific commit onto the current branch.
- `git rebase <branch>`: Reapply commits on top of another base tip.
- `git merge --squash <branch>`: Merge a branch, combining all commits into one.
- `git merge --no-ff <branch>`: Merge with a merge commit even if fast-forward is possible.
- `git stash branch <branch>`: Create a new branch and apply the stashed changes.

# History and Inspection

- `git log --graph --oneline --decorate --all`: Visualize the commit history in a graphical format.
- `git log -p`: Show patches (differences) introduced in each commit.
- `git show <commit>`: Show various types of objects (e.g., commits, tags, trees).
- `git reflog`: Show the history of changes to the repository’s refs.
- `git diff <commit1> <commit2>`: Show changes between two commits.
- `git blame <file>`: Show what revision and author last modified each line of a file.
- `git bisect start`: Begin a binary search to find the commit that introduced a bug.
- `git bisect bad <commit>`: Mark a commit as bad in the bisect process.
- `git bisect good <commit>`: Mark a commit as good in the bisect process.

# Stashing and Cleaning

- `git stash save "description"`: Save changes to the stash with a description.
- `git stash pop`: Apply the last stashed changes and remove them from the stash.
- `git stash apply stash@{n}`: Apply a specific stash.
- `git stash list`: List all stashes.
- `git stash drop stash@{n}`: Remove a specific stash.
- `git clean -fd`: Remove untracked files and directories.
- `git clean -n`: Show what would be removed by `git clean`.

# Submodules

- `git submodule add <repository> <path>`: Add a submodule.
- `git submodule init`: Initialize the submodules.
- `git submodule update`: Update the submodules to the latest commit.
- `git submodule foreach <command>`: Run a command in each submodule.
- `git submodule sync`: Synchronize the submodule URLs.

# Advanced Configuration

- `git config --global alias.<alias-name> '<git-command>'`: Create a Git command alias.
- `git config --global core.editor "<editor>"`: Set the default text editor for Git.
- `git config --global user.name "<name>"`: Set the user name for Git commits.
- `git config --global user.email "<email>"`: Set the user email for Git commits.
- `git config --global --edit`: Edit the global configuration file.

# Rewriting History

- `git commit --amend`: Modify the most recent commit.
- `git rebase -i <base>`: Start an interactive rebase session.
- `git filter-branch --tree-filter <command> -- --all`: Rewrite branches to modify the working tree.
- `git reset --soft <commit>`: Move the HEAD to a commit, staging all changes.
- `git reset --hard <commit>`: Move the HEAD to a commit, discarding all changes.
- `git revert <commit>`: Create a new commit that undoes the changes from a previous commit.

# Collaboration and Review

- `git remote add <name> <url>`: Add a new remote repository.
- `git fetch <remote>`: Download objects and refs from another repository.
- `git pull --rebase <remote> <branch>`: Fetch the branch and rebase onto the current branch.
- `git push <remote> <branch>`: Push changes to a remote repository.
- `git push --force-with-lease <remote> <branch>`: Force push with a safety check to ensure you’re not overwriting someone else’s work.
- `git push --tags`: Push all tags to the remote repository.
- `git request-pull <start> <url> <end>`: Generate a request to pull changes into a repository.

# 🛠 **View and Clean Up Local Git Branches**
## **🐧 Bash**
List Local Branches Without a Remote Connection.
```git branch -vv | grep -E '^\s*\S+\s+[^\[]+$'```  
Automatically Delete Local Branches Without Remote Tracking.
```
git branch -vv | grep -E '^\s*\S+\s+[^\[]+$' | awk '{print $1}' | xargs git branch -D
```
View Local Branches That Had Their Remote Deleted (Ex: PR Merged & Deleted in remote but still exist in local).**
```
git branch -vv | grep ': gone]'
```  
Delete Stale Local Branches That Had Their Remote Deleted.
```
git branch -vv | grep ': gone]' | awk '{print $1}' | xargs git branch -D
```

---

## **🖥 PowerShell**
List Local Branches Without a Remote Connection.
  ```
  git branch -vv | Select-String -NotMatch "origin/"
  ```  
Automatically Delete Local Branches Without Remote Tracking
 ```
git branch -vv | Select-String -NotMatch "origin/" | ForEach-Object { 
    $branch = ($_ -split "\s+")[1]
    git branch -D $branch
}
  ```

View Local Branches That Had Their Remote Deleted (Ex: PR Merged & Deleted in remote but still exist in local).**
```
git branch -vv | Select-String ": gone\]"
```
  
Delete Stale Local Branches That Had Their Remote Deleted.**

```
git fetch -p && git branch -vv | Select-String ': gone]' | ForEach-Object { $_.ToString().Trim().Split()[0] } | ForEach-Object { git branch -D $_ }
```
# Miscellaneous

- `git archive --format=zip --output=<file.zip> <tree-ish>`: Create an archive of files from a named tree.
- `git shortlog -sn`: Summarize commit activity by author.
- `git gc`: Cleanup unnecessary files and optimize the local repository.
- `git fsck`: Verify the connectivity and validity of objects in the database.
- `git worktree add <path> <branch>`: Create a new working tree linked to a branch.
- `git bundle create <file> <revision>`: Create a bundle file from specified revisions.
- `git bundle verify <file>`: Verify the integrity of a bundle file.
- `git bundle unbundle <file>`: Extract a bundle into a repository.
- `git rm --cached -r <file/folder>`: Removes Git tracking without deleting files from local machine which prevents Git from tracking future changes if it’s added to .gitignore.(Ex: most useful for deleting .env when you accidentally push it to remote)

#### [References & Resources](./References&Resources.md)
A collection of blogs, and resources I have used to get to know more of git.
> [References&Resources](./References&Resources.md)
