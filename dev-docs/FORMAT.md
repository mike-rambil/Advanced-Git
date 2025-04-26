# Format for Explaining Git Commands

This project uses a consistent format to document Git commands. Follow this structure when adding new commands:

1. **Command Name/Title**

   - Clearly state the Git command, often with an icon or code formatting.

2. **Short Description**

   - Briefly explain what the command does.

3. **Problem**

   - Describe the scenario or issue the command solves.

4. **Solution**

   - Explain how the command addresses the problem.

5. **Flags** (if applicable)

   - List and explain important command-line flags.

6. **Tutorial/Example**
   - Provide a link to a more detailed tutorial or example usage.

---

**Example:**

## 📌 `git push --force-with-lease`

`git push --force-with-lease` ensures you don't accidentally overwrite someone else's work when force-pushing. It checks if the remote branch still matches what you last pulled. If someone else has pushed changes in the meantime, your push is rejected, preventing unintended data loss.

### 🔹 Problem

When users are within the same branch and want to push to remote but are unsure if another dev has pushed a commit that might block you.

### 🔹 Solution

Use the `--force-with-lease` flag while pushing. If there is a push from another person, your push to the same branch is cancelled.

### [Tutorial](./contents/--force-with-lease.md)
