# Day 22 – Introduction to Git

## Git Setup

```bash
git --version
git config --global user.name "Sachin Teenwal"
git config --global user.email "your@email.com"
git config --list
```

## Create Repository

```bash
mkdir devops-git-practice
cd devops-git-practice
git init
git status
ls -la
```

## Create Files

```bash
touch git-commands.md
touch day-22-notes.md
```

## Stage & Commit

```bash
git add .
git status
git commit -m "Initial Git setup"
```

## View History

```bash
git log
git log --oneline
```

## Make Changes

```bash
echo "git status" >> git-commands.md
git add .
git commit -m "Added git status command"

echo "git log" >> git-commands.md
git add .
git commit -m "Updated Git reference"
```

## Git Workflow

Working Directory → Staging Area → Repository

```bash
git add     # Stage changes
git commit  # Save changes
git log     # View history
```

## Important Commands

```bash
git init
git status
git add
git commit
git log
git log --oneline
git config
```
