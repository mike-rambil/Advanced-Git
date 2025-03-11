
# Past commits of a specific file

- [**1. Show Commit History of a Specific File**](#1-show-commit-history-of-a-specific-file)
- [**2. Show Detailed Commit History (With Changes)**](#2-show-detailed-commit-history-with-changes)
- [**3. Show Commit History With Author and Date**](#3-show-commit-history-with-author-and-date)
- [**4. See Who Last Modified Each Line (Blame)**](#4-see-who-last-modified-each-line-blame)


You can see all commits related to a specific file using Git commands. Here are a few ways to do it:

---

### **1. Show Commit History of a Specific File**
```sh
git log --oneline -- filename.txt
```
🔹 This lists all commits that modified `filename.txt`.

---

### **2. Show Detailed Commit History (With Changes)**
```sh
git log -p -- filename.txt
```
🔹 This shows each commit and the **actual changes** made to `filename.txt`.

---

### **3. Show Commit History With Author and Date**
```sh
git log --pretty=format:"%h - %an, %ar : %s" -- filename.txt
```
🔹 This displays:
- Commit hash
- Author
- Relative date
- Commit message

Example output:
```
a1b2c3d - Michael, 2 days ago : Fixed bug in filename.txt
d4e5f6g - John Doe, 1 week ago : Updated filename.txt with new logic
```

---

### **4. See Who Last Modified Each Line (Blame)**
```sh
git blame filename.txt
```
🔹 This shows the **last commit** that changed each line of the file.

---

