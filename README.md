# Advanced Git Commands

## New ones
## Using `git push --force-with-lease`

### Scenario
You're working on a branch called `feature-branch` in a shared repository. You need to rewrite the history of your branch (maybe to clean up commits using `git rebase` or `git commit --amend`). After rewriting the history, the commit IDs of your branch will change, and you need to push these changes to the remote repository.

### Steps

1. **Rebase or Amend**:
   Let's say you did an interactive rebase to clean up your commit history:
   ```bash
   git rebase -i HEAD~3
Or you amended the last commit:

bash
Copy code
git commit --amend
Push with --force-with-lease:
Now, you need to push your changes, but you want to make sure you don't overwrite any commits that others might have pushed to feature-branch since you last fetched. You would use:
bash
Copy code
git push --force-with-lease origin feature-branch
What Happens
Git will check that the remote feature-branch is in the state you last saw (i.e., when you last fetched).
If no one else has pushed new commits to feature-branch, your force push will go through.
If someone else has pushed commits to feature-branch, Git will prevent the push, and you'll get an error message. This allows you to fetch the latest changes, resolve any conflicts, and try pushing again.
Example Output
If everything is fine:

bash
Copy code
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 324 bytes | 324.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0)
To github.com:username/repo.git
 + abcdef0...1234567 feature-branch -> feature-branch (forced update)
If someone else pushed changes:

bash
Copy code
To github.com:username/repo.git
 ! [rejected]        feature-branch -> feature-branch (stale info)
error: failed to push some refs to 'github.com:username/repo.git'
In the second case, you would need to fetch the latest changes with git pull or git fetch, incorporate them into your branch, and then try the push again.

When to Use It
After Rewriting History: Use it when you've rewritten commit history (rebasing, squashing, amending) and need to push those changes safely.
Collaborative Environments: It's particularly useful in a team setting to avoid accidentally overwriting others' work.
When Not to Use It
Public Repos: If you're working on a public repository or branch that many people rely on, you should be extremely cautious with any form of force-pushing.
Simple Changes: If you didn't rewrite history and just want to push regular changes, there's no need for force pushing.
This command strikes a good balance between safety and necessity when you need to make sure your changes are pushed without losing others' contributions.
## Repository Management

- `git init --bare`: Initialize a bare repository, typically used for remote repositories.
- `git clone --mirror <repository>`: Clone a repository in mirror mode, including all refs and branches.

## Branching and Merging

- `git branch -m <old-branch> <new-branch>`: Rename a branch.
- `git branch -d <branch>`: Delete a branch that has been merged.
- `git branch -D <branch>`: Force delete a branch that hasn’t been merged.
- `git checkout -b <new-branch>`: Create and switch to a new branch.
- `git cherry-pick <commit>`: Apply the changes from a specific commit onto the current branch.
- `git rebase <branch>`: Reapply commits on top of another base tip.
- `git merge --squash <branch>`: Merge a branch, combining all commits into one.
- `git merge --no-ff <branch>`: Merge with a merge commit even if fast-forward is possible.
- `git stash branch <branch>`: Create a new branch and apply the stashed changes.

## History and Inspection

- `git log --graph --oneline --decorate --all`: Visualize the commit history in a graphical format.
- `git log -p`: Show patches (differences) introduced in each commit.
- `git show <commit>`: Show various types of objects (e.g., commits, tags, trees).
- `git reflog`: Show the history of changes to the repository’s refs.
- `git diff <commit1> <commit2>`: Show changes between two commits.
- `git blame <file>`: Show what revision and author last modified each line of a file.
- `git bisect start`: Begin a binary search to find the commit that introduced a bug.
- `git bisect bad <commit>`: Mark a commit as bad in the bisect process.
- `git bisect good <commit>`: Mark a commit as good in the bisect process.

## Stashing and Cleaning

- `git stash save "description"`: Save changes to the stash with a description.
- `git stash pop`: Apply the last stashed changes and remove them from the stash.
- `git stash apply stash@{n}`: Apply a specific stash.
- `git stash list`: List all stashes.
- `git stash drop stash@{n}`: Remove a specific stash.
- `git clean -fd`: Remove untracked files and directories.
- `git clean -n`: Show what would be removed by `git clean`.

## Submodules

- `git submodule add <repository> <path>`: Add a submodule.
- `git submodule init`: Initialize the submodules.
- `git submodule update`: Update the submodules to the latest commit.
- `git submodule foreach <command>`: Run a command in each submodule.
- `git submodule sync`: Synchronize the submodule URLs.

## Advanced Configuration

- `git config --global alias.<alias-name> '<git-command>'`: Create a Git command alias.
- `git config --global core.editor "<editor>"`: Set the default text editor for Git.
- `git config --global user.name "<name>"`: Set the user name for Git commits.
- `git config --global user.email "<email>"`: Set the user email for Git commits.
- `git config --global --edit`: Edit the global configuration file.

## Rewriting History

- `git commit --amend`: Modify the most recent commit.
- `git rebase -i <base>`: Start an interactive rebase session.
- `git filter-branch --tree-filter <command> -- --all`: Rewrite branches to modify the working tree.
- `git reset --soft <commit>`: Move the HEAD to a commit, staging all changes.
- `git reset --hard <commit>`: Move the HEAD to a commit, discarding all changes.
- `git revert <commit>`: Create a new commit that undoes the changes from a previous commit.

## Collaboration and Review

- `git remote add <name> <url>`: Add a new remote repository.
- `git fetch <remote>`: Download objects and refs from another repository.
- `git pull --rebase <remote> <branch>`: Fetch the branch and rebase onto the current branch.
- `git push <remote> <branch>`: Push changes to a remote repository.
- `git push --force-with-lease <remote> <branch>`: Force push with a safety check to ensure you’re not overwriting someone else’s work.
- `git push --tags`: Push all tags to the remote repository.
- `git request-pull <start> <url> <end>`: Generate a request to pull changes into a repository.

## Miscellaneous

- `git archive --format=zip --output=<file.zip> <tree-ish>`: Create an archive of files from a named tree.
- `git shortlog -sn`: Summarize commit activity by author.
- `git gc`: Cleanup unnecessary files and optimize the local repository.
- `git fsck`: Verify the connectivity and validity of objects in the database.
- `git worktree add <path> <branch>`: Create a new working tree linked to a branch.
- `git bundle create <file> <revision>`: Create a bundle file from specified revisions.
- `git bundle verify <file>`: Verify the integrity of a bundle file.
- `git bundle unbundle <file>`: Extract a bundle into a repository.
