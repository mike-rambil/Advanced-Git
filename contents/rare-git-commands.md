# Useful Rare Git Commands You Never Heard Of

A collection of lesser-known but powerful Git commands. Use these to level up your Git workflow!

## Table of Contents

- [git replace](#git-replace)
- [git notes](#git-notes)
- [git rerere](#git-rerere)
- [git cherry](#git-cherry)
- [git worktree prune](#git-worktree-prune)
- [git commit --fixup](#git-commit---fixup)

---

## `git replace <old-commit> <new-commit>`

Temporarily substitute one commit for another. Useful for testing or patching history without rewriting it.

**Example:**

```
git replace abc123 def456
```

---

## `git notes add -m "message" <commit>`

Attach notes to commits without changing commit history. Notes can be shared with others if pushed.

**Example:**

```
git notes add -m "Reviewed by Alice" 1a2b3c
```

---

## `git rerere`

Enable reuse of recorded conflict resolutions to auto-resolve repeated merge conflicts. Run `git rerere` to enable, and Git will remember how you resolved conflicts.

**Enable:**

```
git config --global rerere.enabled true
```

---

## `git cherry <upstream> [<head>]`

Find commits in your branch that are not in the upstream branch. Useful for comparing branches.

**Example:**

```
git cherry origin/main my-feature-branch
```

---

## `git worktree prune`

Clean up stale worktree references after manual deletion of worktree directories.

**Example:**

```
git worktree prune
```

---

## `git commit --fixup <commit>`

Create a fixup commit that is automatically squashed into the target commit during an interactive rebase.

**Example:**

```
git commit --fixup=1a2b3c
```

---

For more rare commands, contribute to this file!
