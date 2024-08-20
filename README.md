# Advanced Git Commands

## New ones

- `git push --force-with-lease` - [Link](https://medium.com/@sahilsahilbhatia/git-push-force-with-lease-vs-force-ecae72601e80)

Git --force-with-lease Usage
The --force-with-lease option in Git is a safer alternative to the --force option. It helps prevent accidental overwriting of other developers’ changes when pushing to a shared repository.

When to Use
Consider a scenario where you and another developer are working on the same branch. Both of you have pulled the latest changes, made some changes locally, and now want to push your changes to the remote repository.

If you push your changes first, the other developer’s push will be rejected because their local branch is behind the remote branch. If they use git push --force, your changes will be overwritten, which is not desirable.

In this case, git push --force-with-lease can be used. This command will only force push the changes if the remote branch is at the state that we expect. In other words, it ensures that the latest commit on the remote branch is the one that we last fetched or pushed, preventing us from overwriting others’ work.

Example
# Fetch the latest changes from the remote repository
git fetch origin

# Make some changes to your local repository and commit them
git commit -am "Made some changes"

# Attempt to push your changes
git push origin master

# If the push is rejected because the remote repository has been updated,
# use --force-with-lease to safely force push your changes
git push --force-with-lease origin master

In the above example, if someone else has pushed changes to the master branch after you last fetched, the --force-with-lease command will prevent you from overwriting their changes and will fail. This gives you a chance to fetch the latest changes, merge or rebase your changes on top of them, and then push again.

Conclusion
The --force-with-lease option is a safer way to force push in Git. It provides an additional layer of protection against overwriting others’ work in a shared repository. Always prefer using --force-with-lease over --force when you need to force push.


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
