# Day 23 – Git Branching & Working with GitHub

## Branching Commands

```bash
git branch
git branch feature-1
git switch feature-1

git switch -c feature-2

git switch main

git branch -d feature-2
```

## Commit on Branch

```bash
echo "Feature 1 update" >> feature.txt

git add .
git commit -m "Added feature 1"
```

## GitHub Commands

```bash
git remote add origin <repo-url>

git push -u origin main

git push -u origin feature-1
```

## Pull Changes

```bash
git pull origin main

git fetch origin
```

## Key Concepts

### What is a Branch?

A separate line of development used to work independently.

### What is HEAD?

Pointer to the current branch/commit.

### Origin vs Upstream

* origin → Your GitHub repository
* upstream → Original repository you forked from

### Fetch vs Pull

* fetch → Download changes only
* pull → Download + merge changes

### Clone vs Fork

* Clone → Copy repository locally
* Fork → Copy repository to your GitHub account

### Working Flow

```text
Main Branch
     │
     ├── feature-1
     └── feature-2
```

## Important Commands

```bash
git branch
git switch
git checkout
git push
git pull
git fetch
git remote -v
```
