[⬅️ Back to Commit Ranges & Push-Safety Checks](https://github.com/mike-rambil/Advanced-Git/blob/main/contents/commit-ranges-push-safety-checks.md)

# git status -sb: Ahead/Behind at a Glance


![Category: Collaboration](https://img.shields.io/badge/Category-Collaboration-blue)
> One line that tells you whether a push will succeed and how many commits it carries.

`git status -sb` combines two flags: `-s` (short format, one line per changed file) and `-b` (show a branch header). The header compares your branch to its upstream:

```
## main...origin/main [ahead 3]            # you have 3 commits to push
## main...origin/main [behind 2]           # remote has 2 commits you don't
## main...origin/main [ahead 3, behind 2]  # diverged: both sides have new commits
## main...origin/main                      # in sync (as of your last fetch)
```

**Why check before pushing?** If someone else pushed to the same branch, you're *behind*, and a plain `git push` is rejected as non-fast-forward. You have to pull (merge or rebase) first. If you're only *ahead N*, the push is a fast-forward and will send exactly those N commits.

Real output from the demo repo: the header says `[ahead 3]` until you fetch, then the truth appears:

```
$ git status -sb
## main...origin/main [ahead 3]
$ git fetch origin
$ git status -sb
## main...origin/main [ahead 3, behind 2]
$ git push
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. If you want to integrate the remote changes,
hint: use 'git pull' before pushing again.
```


#### Command
```sh
git status -sb
```

#### Flags
- `-s`: Short format: one line per changed file (`--short`).
- `-b`: Show the branch and its ahead/behind counts vs. upstream (`--branch`).


#### Examples
- **Refresh remote-tracking refs, then show ahead/behind.** 

 ```sh
git fetch origin && git status -sb 
 ```
- **Script-friendly counts: prints `<behind> <ahead>` (e.g. `2` and `3`).** 

 ```sh
git rev-list --left-right --count origin/main...main 
 ```


#### Warnings
- ⚠️ The counts compare against your *local copy* of `origin/main`. Without a fetch, `behind` can read 0 even when the remote has moved.


#### Links
- [Official Docs](https://git-scm.com/docs/git-status)


[➡️ See the Next Step: git log A..B: What B Has That A Doesn't](https://github.com/mike-rambil/Advanced-Git/blob/main/contents/git-log-a-b-what-b-has-that-a-doesn-t.md)

---

_Author: mike-rambil • Updated: 2026-10-07 • Tags: status, ahead-behind, push_
