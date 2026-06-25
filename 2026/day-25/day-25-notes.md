# Day 25 – Git Reset vs Revert

## Git Reset

```bash
git reset --soft HEAD~1
git reset --mixed HEAD~1
git reset --hard HEAD~1
```

## Git Revert

```bash
git log --oneline
git revert <commit-id>
```

## Reflog

```bash
git reflog
```

## Branching Strategies

### GitFlow

```text
main
 └── develop
      ├── feature
      ├── release
      └── hotfix
```

### GitHub Flow

```text
main
 └── feature
      └── Pull Request
```

### Trunk-Based

```text
main
 ├── small branch
 ├── small branch
 └── merge quickly
```

## Important Commands

```bash
git reset --soft
git reset --mixed
git reset --hard
git revert
git reflog
```

# Day 25 – Git Reset vs Revert & Branching Strategies

## Git Reset

### Soft Reset

Moves HEAD back but keeps changes staged.

### Mixed Reset

Moves HEAD back and unstages changes while keeping them in the working directory.

### Hard Reset

Moves HEAD back and permanently deletes all uncommitted changes.

### When to Use

* **Soft** → Edit the last commit.
* **Mixed** → Unstage files.
* **Hard** → Discard unwanted local changes.

### Should you reset pushed commits?

No. Reset rewrites commit history and may cause problems for collaborators.

---

## Git Revert

### What does revert do?

Creates a new commit that reverses the selected commit without deleting history.

### Why is it safer?

It preserves commit history, making it safe for shared branches.

### When to use?

Use **revert** for public/shared branches and **reset** for local commits.

---

## Reset vs Revert

| Feature                  | Git Reset     | Git Revert      |
| ------------------------ | ------------- | --------------- |
| Removes commit history   | Yes           | No              |
| Creates new commit       | No            | Yes             |
| Safe for shared branches | No            | Yes             |
| Best Use                 | Local changes | Public branches |

---

## Branching Strategies

### GitFlow

* Uses **main, develop, feature, release, and hotfix** branches.
* Best for large teams with scheduled releases.

### GitHub Flow

* Feature branch → Pull Request → Merge into main.
* Best for continuous deployment.

### Trunk-Based Development

* Developers work on short-lived branches and merge frequently into main.
* Best for fast-moving teams.

---

## Which Strategy?

* **Startup:** GitHub Flow
* **Large Enterprise:** GitFlow
* **Open Source:** GitHub Flow

---

## What I Learned

* Reset rewrites history.
* Revert safely undoes changes.
* Different branching strategies fit different team sizes.



