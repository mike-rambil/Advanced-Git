## How to Use `git push --force-with-lease` Safely  

### 📑 Table of Contents  
- [How to Use `git push --force-with-lease` Safely](#how-to-use-git-push---force-with-lease-safely)  
  - [Step 1: Understand the Problem](#step-1-understand-the-problem)  
  - [Step 2: Use `git push --force-with-lease`](#step-2-use-git-push---force-with-lease)  
  - [Step 3: Handle Rejected Pushes](#step-3-handle-rejected-pushes)  
  - [Step 4: Best Practices](#step-4-best-practices)

### Step 1: Understand the Problem  
1. You and another developer are working on the same branch.  
2. You want to push your changes but are unsure if someone else has already pushed new commits.  
3. A standard `git push` might fail due to conflicts, and `git push --force` could overwrite others' work.  

### Step 2: Use `git push --force-with-lease`  
1. Ensure your local branch is up to date:  
   ```sh
   git fetch origin
   ```  
2. Attempt to push with `--force-with-lease`:  
   ```sh
   git push --force-with-lease
   ```  
3. If no one else has pushed changes, your force push will succeed.  
4. If new commits exist on the remote, your push will be rejected, preventing accidental overwrites.  

### Step 3: Handle Rejected Pushes  
1. If your push is rejected, pull the latest changes:  
   ```sh
   git pull --rebase origin main  # Adjust branch name as needed
   ```  
2. Resolve any conflicts and commit your updates.  
3. Retry pushing using `--force-with-lease`.  

### Step 4: Best Practices  
1. **Use `--force-with-lease` instead of `--force`** to avoid overwriting others’ work.  
2. **Always fetch before pushing** to stay updated with remote changes.  
3. **Communicate with your team** when force-pushing is necessary.
