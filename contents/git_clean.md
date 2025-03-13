## Table of Contents

1. [Delete Untracked Files and Folders](#delete-untracked-files-and-folders)  
   1.1 [Dry Run (Check What Will Be Deleted)](#1️⃣-dry-run-check-what-will-be-deleted)  
   1.2 [Delete Untracked Files and Folders](#2️⃣-delete-untracked-files-and-folders)
2. [Summary](#summary)

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

## Summary  

Git provides the `git clean` command to safely remove untracked files and directories from a repository. Before deleting anything, you can perform a dry run using `git clean -n -d` to preview what will be removed. Once verified, running `git clean -f -d` will forcefully delete untracked files and directories. This helps keep your repository clean by removing unnecessary files that are not part of version control.
