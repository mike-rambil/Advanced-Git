<table style="width:100%; border: 0; margin: 0 auto;">
  <tr style="width:100%;">
    <td style="width: 25%; text-align: center;">
      <img src="https://raw.githubusercontent.com/mike-rambil/Advanced-Git/refs/heads/main/brand/advanced-git-mike-rambil.png" height="200" width="375" alt="banner" />
    </td>
    <td style="width: 75%; text-align: right;">
      <h1>Advanced Git Commands</h1>
      <em style="display: block; text-align: center; width:100%;">For Dummies & Try hards</em>
    </td>
  </tr>
</table>

> [!IMPORTANT]
> If you find a useful GIT command - be sure to sent a PR here as well :)

# Table of Contents

- [🔥Latest Finds](#latest-finds)
- [Table of Contents](#table-of-contents)
- [Latest](#latest)
- [📌 `git push --force-with-lease`](#git-push---force-with-lease)
  - [🔹 Problem](#git-push---force-with-lease-problem)
  - [🔹 Solution](#git-push---force-with-lease-solution)
  - [Tutorial](#git-push---force-with-lease-tutorial)
- [📌 `git worktree`](#git-worktree)
  - [🔹 Problem](#git-worktree-problem)
  - [🔹 Solution](#git-worktree-solution)
  - [🔹 Flags](#git-worktree-flags)
  - [Tutorial](#git-worktree-tutorial)
- [📌 `git clean`](#delete-untracked-files-git-clean)
  - [🔹 Problem](#delete-untracked-files-git-clean-problem)
  - [🔹 Solution](#delete-untracked-files-git-clean-solution)
  - [🔹 Flags](#delete-untracked-files-git-clean-flags)
  - [Tutorial](#delete-untracked-files-git-clean-tutorial)
- [📌 `git log --oneline -- filename.txt`](#git-log-oneline-filename-txt)
  - [🔹 Problem](#git-log-oneline-filename-txt-problem)
  - [🔹 Solution](#git-log-oneline-filename-txt-solution)
  - [Tutorial](#git-log-oneline-filename-txt-tutorial)
- [Repository Management](#repository-management)
  - [🔹 Problem](#repository-management-problem)
  - [🔹 Solution](#repository-management-solution)
  - [Flags](#repository-management-flags)
  - [Tutorial](#repository-management-tutorial)
- [Branching and Merging](#branching-and-merging)
  - [🔹 Problem](#branching-and-merging-problem)
  - [🔹 Solution](#branching-and-merging-solution)
  - [Flags](#branching-and-merging-flags)
  - [Tutorial](#branching-and-merging-tutorial)
- [History and Inspection](#history-and-inspection)
  - [🔹 Problem](#history-and-inspection-problem)
  - [🔹 Solution](#history-and-inspection-solution)
  - [Flags](#history-and-inspection-flags)
  - [Tutorial](#history-and-inspection-tutorial)
- [Stashing and Cleaning](#stashing-and-cleaning)
  - [🔹 Problem](#stashing-and-cleaning-problem)
  - [🔹 Solution](#stashing-and-cleaning-solution)
  - [Flags](#stashing-and-cleaning-flags)
  - [Tutorial](#stashing-and-cleaning-tutorial)
- [Submodules](#submodules)
  - [🔹 Problem](#submodules-problem)
  - [🔹 Solution](#submodules-solution)
  - [Flags](#submodules-flags)
  - [Tutorial](#submodules-tutorial)
- [Advanced Configuration](#advanced-configuration)
  - [🔹 Problem](#advanced-configuration-problem)
  - [🔹 Solution](#advanced-configuration-solution)
  - [Flags](#advanced-configuration-flags)
  - [Tutorial](#advanced-configuration-tutorial)
- [Rewriting History](#rewriting-history)
  - [🔹 Problem](#rewriting-history-problem)
  - [🔹 Solution](#rewriting-history-solution)
  - [Flags](#rewriting-history-flags)
  - [Tutorial](#rewriting-history-tutorial)
- [Collaboration and Review](#collaboration-and-review)
  - [🔹 Problem](#collaboration-and-review-problem)
  - [🔹 Solution](#collaboration-and-review-solution)
  - [Flags](#collaboration-and-review-flags)
  - [Tutorial](#collaboration-and-review-tutorial)
- [🛠 **View and Clean Up Local Git Branches**](#-view-and-clean-up-local-git-branches)
  - [**🐧 Bash**](#-bash)
  - [**🖥 PowerShell**](#-powershell)
- [Miscellaneous](#miscellaneous)
- [Useful Rare Git Commands You Never Heard Of](#useful-rare-git-commands-you-never-heard-of)
- [Contributors \& Credits](#contributors--credits)
  - [👨‍👩‍👧‍👦 Contributors](#-contributors)
  - [🧑‍💻 Credits \& Authors](#-credits--authors)
  - [📖 References \& Resources](#-references--resources)

<center>
<h1 id="advanced-git-commands">Advanced Git Commands</h1>
</center>

## 🔥Latest Finds

- `git push --force-with-lease` - [Cancels git push if someone else did a commit on the same remote branch and safe guards `git push`](https://medium.com/@sahilsahilbhatia/git-push-force-with-lease-vs-force-ecae72601e80)
- `git maintenance start` - [Runs a cronJob in background for the specified repo for periodic maintanence](https://git-scm.com/docs/git-maintenance)

## 📌 `git push --force-with-lease`

`git push --force-with-lease` ensures you don't accidentally overwrite someone else's work when force-pushing. It checks if the remote branch still matches what you last pulled. If someone else has pushed changes in the meantime, your push is rejected, preventing unintended data loss.

### 🔹 Problem

When users are within the same branch and they want to push to remote but not sure if there is a commit pushed from the other dev that might block you

### 🔹 Solution

use the ---force with lease flag while pushing to check it there is a push. If there is a push from the other person - your push to the same branch is cancelled.

### [Tutorial](./contents/--force-with-lease.md)

> [Checkout Tutorial Here](./contents/--force-with-lease.md)

## 📌 `git worktree`

<h2 id="git-worktree-problem">🔹 Problem</h2>

Switching branches in Git can be slow and disruptive to make changes to different branches can be tedious and problematic if you need to work at different branches simultaneously.

<h2 id="git-worktree-solution">🔹 Solution</h2>

Git Worktree allows you to work on multiple branches simultaneously without the overhead of constant switching and reconfiguration.

<h3 id="git-worktree-flags">🔹 Flags</h3>

- `git worktree add <path> <branch>`: Creates a new worktree for an existing branch.
- `git worktree add -b <branch> <path>`: Creates a new worktree with a new branch.
- `git worktree list`: Lists all active worktrees.
- `git worktree remove <path>`: Detaches a worktree from the repo without deleting files.
- `git worktree prune`: Cleans up stale worktree references after manual deletion.
- `git worktree move <old-path> <new-path>`: Moves a worktree to a different location.

<h2 id="git-worktree-tutorial" href='./contents/worktree.md'>🔹 Tutorial</h2>

> [Checkout Tutorial Here](./contents/worktree.md)

<h2 id="delete-untracked-files-git-clean">📌 <code>git clean</code></h2>

`git clean` removes **untracked files and directories** from your Git repository, helping to keep your workspace clean by deleting unnecessary files not tracked by version control.

### 🔹 Problem

Over time, untracked files (e.g., logs, build artifacts, temporary files) can clutter your repository, making it harder to manage. Manually deleting them is inefficient and error-prone.

### 🔹 Solution

Use `git clean` to safely remove untracked files and directories.

### 🔹 Flags

- `-n` → Shows what will be deleted without actually deleting anything.
- `-f` → Forces deletion of untracked files.
- `-d` → Deletes untracked directories.
- `-i` → Interactive mode, allowing selective deletion.
- `-x` → Removes ignored and untracked files.
- `-X` → Removes only ignored files.

### [Tutorial](./contents/git-clean.md)

> [Checkout Tutorial Here](./contents/git_clean.md)

<h2 id="git-log-oneline-filename-txt"><code>git log --oneline -- filename.txt</code></h2>

`git log --oneline -- filename.txt` shows all past commits that changed a specific file (filename.txt) in a short and easy-to-read format.

<h3 id="git-log-oneline-filename-txt-problem">🔹 Problem</h3>

When users want to see past commits of a specific file to either revert back a commit/cherrypick/review etc.

<h3 id="git-log-oneline-filename-txt-solution">🔹 Solution</h3>

use the `git log --oneline -- filename.txt` to review the past commits and view the differences. Users can then subsequently revert, reset, review and do whatever makes sense with that commit of the specific file.

<h3 id="git-log-oneline-filename-txt-tutorial">Tutorial</h3>

> [Checkout Tutorial Here](./contents/--_filename.txt.md)

# Repository Management

## 📌 `git init --bare`

**Short Description:** Initialize a bare repository, typically used for remote repositories.

**Problem:** You need a central repository for collaboration, not a working directory.

**Solution:** Use `git init --bare` to create a repository that only stores Git data, suitable for remotes.

**Example:**

```sh
git init --bare my-repo.git
```

---

## 📌 `git clone --mirror <repository>`

**Short Description:** Clone a repository in mirror mode, including all refs and branches.

**Problem:** You want a full backup or migration of a repository, including all refs.

**Solution:** Use `git clone --mirror` for a complete copy.

**Example:**

```sh
git clone --mirror https://github.com/example/repo.git
```

---

For more repository management commands, see [contents/command-reference.md](./contents/command-reference.md#repository-management).

# Branching and Merging

## 📌 `git branch -m <old-branch> <new-branch>`

**Short Description:** Rename a branch.

**Problem:** You want to change a branch name for clarity or convention.

**Solution:** Use `git branch -m` to rename.

**Example:**

```sh
git branch -m old-feature new-feature
```

---

For more branching and merging commands, see [contents/command-reference.md](./contents/command-reference.md#branching-and-merging).

# History and Inspection

- `git log --graph --oneline --decorate --all`: Visualize the commit history in a graphical format.
- `git log -p`: Show patches (differences) introduced in each commit.
- `git show <commit>`: Show various types of objects (e.g., commits, tags, trees).
- `git reflog`: Show the history of changes to the repository's refs.
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
- `git push --force-with-lease <remote> <branch>`: Force push with a safety check to ensure you're not overwriting someone else's work.
- `git push --tags`: Push all tags to the remote repository.
- `git request-pull <start> <url> <end>`: Generate a request to pull changes into a repository.

# 🛠 **View and Clean Up Local Git Branches**

## **🐧 Bash**

List Local Branches Without a Remote Connection.
`git branch -vv | grep -E '^\s*\S+\s+[^\[]+$'`  
Automatically Delete Local Branches Without Remote Tracking.

```
git branch -vv | grep -E '^\s*\S+\s+[^\[]+$' | awk '{print $1}' | xargs git branch -D
```

View Local Branches That Had Their Remote Deleted (Ex: PR Merged & Deleted in remote but still exist in local).\*\*

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

View Local Branches That Had Their Remote Deleted (Ex: PR Merged & Deleted in remote but still exist in local).\*\*

```
git branch -vv | Select-String ": gone\]"
```

Delete Stale Local Branches That Had Their Remote Deleted.\*\*

```
git fetch -p && git branch -vv | Select-String ': gone]' | ForEach-Object { $_.ToString().Trim().Split()[0] } | ForEach-Object { git branch -D $_ }
```

# Miscellaneous

## 📌 `git archive --format=zip --output=<file.zip> <tree-ish>`

**Short Description:** Create an archive of files from a named tree.

**Problem:** You want to export a snapshot of your repository as a zip file.

**Solution:** Use `git archive` to create a zip archive.

**Example:**

```sh
git archive --format=zip --output=repo.zip main
```

---

For more miscellaneous commands, see [contents/command-reference.md](./contents/command-reference.md#miscellaneous).

## Useful Rare Git Commands You Never Heard Of

Here are some lesser-known but powerful Git commands:

- `git replace <old-commit> <new-commit>`: Temporarily substitute one commit for another, useful for testing or patching history without rewriting it.
- `git notes add -m "message" <commit>`: Attach notes to commits without changing commit history.
- `git rerere`: Enable reuse of recorded conflict resolutions to auto-resolve repeated merge conflicts.

For more rare and advanced commands, check out [contents/rare-git-commands.md](./contents/rare-git-commands.md).

## Contributors & Credits

> [!NOTE]
> Add yourself, your links you have used, or even your blogs if you have some or is an **author**

#### [👨‍👩‍👧‍👦 Contributors](./Contributors&Credits.md)

A list of individuals who have contributed to this project.

> 👨‍👩‍👧‍👦 [View Contributors](./Contributors&Credits.md#contributors)

#### [🧑‍💻 Credits & Authors](./Contributors&Credits.md#credits-authors)

Acknowledgment of the original authors.

> 🧑‍💻 [View Credits & Authors](./Contributors&Credits.md#credits-authors)

#### [📖 References & Resources](./Contributors&Credits.md#references-resources)

A collection of blogs, articles, and materials used to learn more about Git.

> 📖 [View References & Resources](./Contributors&Credits.md#references-resources)
