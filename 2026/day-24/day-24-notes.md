# Day 24 – Advanced Git: Merge, Rebase, Stash & Cherry Pick

## Merge

### Fast-Forward Merge

A fast-forward merge happens when the target branch has no new commits and Git simply moves the branch pointer forward.

### Merge Commit

Git creates a merge commit when both branches have different commit histories.

### Merge Conflict

Occurs when the same line is modified in different branches and Git cannot automatically decide which change to keep.

### Commands

```bash
git merge feature-login
git merge feature-signup
```

---

## Rebase

### What does rebase do?

Rebase moves your branch commits on top of another branch, creating a cleaner and linear history.

### Merge vs Rebase

* Merge preserves branch history.
* Rebase creates a linear history.

### Why avoid rebasing shared commits?

Rebase rewrites commit history and can cause problems for collaborators.

### When to use?

* Rebase → before merging local work.
* Merge → for shared/public branches.

### Commands

```bash
git switch feature-dashboard
git rebase main
```

---

## Squash Merge

### What does squash do?

Combines multiple commits into a single commit before merging.

### When to use?

Useful when a feature branch contains many small commits.

### Trade-off

Creates a cleaner history but removes individual commit details.

### Commands

```bash
git merge --squash feature-profile
git commit -m "Merged profile feature"
```

---

## Git Stash

### stash pop vs stash apply

* `git stash pop` → apply and remove stash.
* `git stash apply` → apply and keep stash.

### Real Use Case

Save unfinished work when switching branches urgently.

### Commands

```bash
git stash
git stash list
git stash pop
git stash apply stash@{0}
git stash push -m "WIP"
```

---

## Cherry Pick

### What does cherry-pick do?

Applies a specific commit from one branch to another.

### Real Use Case

Move a bug fix without merging the entire branch.

### Risk

May create duplicate commits and merge conflicts.

### Commands

```bash
git log --oneline
git cherry-pick <commit-id>
```

---

## Visualize History

```bash
git log --oneline --graph --all
```

---

## Important Commands

```bash
git merge
git rebase
git stash
git stash list
git stash pop
git stash apply
git cherry-pick
git log --graph
```
