### 📄 `git-clean.md`  

```markdown
# Git Clean: Remove Untracked Files and Directories  

## 📌 Table of Contents  

1. [Overview](#overview)  
2. [Git Clean Flags](#git-clean-flags)  
3. [Examples](#examples)  
4. [Tips & Tricks](#tips--tricks)  
5. [Summary](#summary)  

## 📌 Overview  

`git clean` is a powerful command that helps remove **untracked files and directories** from your repository. It is particularly useful when you want to reset your working directory without affecting committed files.  

## 📌 Git Clean Flags  

| Flag | Description | Example |
|------|------------|---------|
| `-n` | Shows what will be deleted without actually deleting anything. | `git clean -n -d` |
| `-f` | Forces deletion of untracked files. | `git clean -f` |
| `-d` | Deletes untracked directories. | `git clean -f -d` |
| `-i` | Interactive mode to selectively delete files. | `git clean -i` |
| `-x` | Removes ignored and untracked files. | `git clean -f -x` |
| `-X` | Removes only ignored files. | `git clean -f -X` |

## 📌 Examples  

### 1️⃣ Check What Will Be Deleted  

Before deleting, always run a **dry run** to see what will be removed:  

```bash
git clean -n -d
```  

### 2️⃣ Remove Untracked Files  

To delete all untracked files:  

```bash
git clean -f
```  

### 3️⃣ Remove Untracked Files and Directories  

To remove both **untracked files and directories**:  

```bash
git clean -f -d
```  

### 4️⃣ Interactive Mode (Selective Deletion)  

To choose which files to delete:  

```bash
git clean -i
```  

### 5️⃣ Remove Ignored and Untracked Files  

To remove both **ignored and untracked files**:  

```bash
git clean -f -x
```  

To remove only **ignored files**:  

```bash
git clean -f -X
```  

## 📌 Tips & Tricks  

✔ **Always use `-n` before `-f`** to check what will be deleted.  
✔ **Use `git status -u`** to view untracked files before cleaning.  
✔ **Be cautious with `-x` and `-X`** as they remove ignored files, which might include config files.  
✔ **Avoid running `git clean` in shared repositories** unless you are sure of the changes.  
✔ **Combine with `git reset --hard`** if you want a full workspace reset (removes untracked & modifies files).  

## 📌 Summary  

- `git clean` helps remove **untracked files and directories** to keep your repo clean.  
- Use `-n` before `-f` to **preview** deletions.  
- `-d` removes **directories**, while `-x` removes **ignored files**.  
- Use **interactive mode (`-i`)** for selective deletion.  

Now you're ready to keep your Git workspace clean and efficient! 🚀  
```  
