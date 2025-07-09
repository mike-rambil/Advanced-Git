# Miscellaneous & Orphaned Git Commands

This file collects useful Git commands and scripts that were previously only in the README and not referenced elsewhere in this repository.

---

## `git maintenance start`

Runs a cronJob in background for the specified repo for periodic maintenance.

Example:

```sh
git maintenance start
```

[Official docs](https://git-scm.com/docs/git-maintenance)

---

## `git request-pull`

Generate a request to pull changes into a repository.

Example:

```sh
git request-pull <start> <url> <end>
```

---

# 🛠 View and Clean Up Local Git Branches

## 🐧 Bash

List Local Branches Without a Remote Connection:

```sh
git branch -vv | grep -E '^\s*\S+\s+[^\[]+$'
```

Automatically Delete Local Branches Without Remote Tracking:

```sh
git branch -vv | grep -E '^\s*\S+\s+[^\[]+$' | awk '{print $1}' | xargs git branch -D
```

View Local Branches That Had Their Remote Deleted (e.g., PR merged & deleted in remote but still exist in local):

```sh
git branch -vv | grep ': gone]'
```

Delete Stale Local Branches That Had Their Remote Deleted:

```sh
git branch -vv | grep ': gone]' | awk '{print $1}' | xargs git branch -D
```

---

## 🖥 PowerShell

List Local Branches Without a Remote Connection:

```powershell
git branch -vv | Select-String -NotMatch "origin/"
```

Automatically Delete Local Branches Without Remote Tracking:

```powershell
git branch -vv | Select-String -NotMatch "origin/" | ForEach-Object {
   $branch = ($_ -split "\s+")[1]
   git branch -D $branch
}
```

View Local Branches That Had Their Remote Deleted (e.g., PR merged & deleted in remote but still exist in local):

```powershell
git branch -vv | Select-String ": gone\]"
```

Delete Stale Local Branches That Had Their Remote Deleted:

```powershell
git fetch -p && git branch -vv | Select-String ': gone]' | ForEach-Object { $_.ToString().Trim().Split()[0] } | ForEach-Object { git branch -D $_ }
```
