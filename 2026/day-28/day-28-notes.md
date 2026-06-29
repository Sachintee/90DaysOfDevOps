# Day 28 – Revision Day (Days 1–27)

## Self Assessment

### Linux

* ✅ File & directory management
* ✅ Processes & services
* ✅ File permissions & ownership
* ✅ Networking basics
* ⚠️ Need more practice with LVM

### Shell Scripting

* ✅ Variables & loops
* ✅ Functions
* ✅ Error handling
* ✅ Cron jobs
* ⚠️ More practice with awk & sed

### Git & GitHub

* ✅ Branching
* ✅ Merge & Rebase
* ✅ Stash & Cherry Pick
* ✅ Reset & Revert
* ✅ GitHub CLI

---

## Weak Topics Revisited

### 1. LVM

Reviewed Physical Volumes, Volume Groups and Logical Volumes.

### 2. awk & sed

Practiced searching, replacing and extracting text.

### 3. Git Rebase

Practiced rebasing branches and resolving conflicts.

---

## Quick Fire Answers

**chmod 755 script.sh**

* Owner: rwx
* Group: r-x
* Others: r-x

**Process vs Service**

* Process → Running program
* Service → Background process managed by systemd

**Process using Port 8080**

```bash
sudo ss -tulpn | grep 8080
```

**set -euo pipefail**

* Exit on errors
* Undefined variables cause failure
* Pipeline fails if any command fails

**git reset --hard vs git revert**

* Reset removes history
* Revert creates a new undo commit

**Best Branching Strategy (5 Developers)**
GitHub Flow

**git stash**
Temporarily saves unfinished work.

**Run every day at 3 AM**

```cron
0 3 * * * /path/script.sh
```

**git fetch vs git pull**

* Fetch downloads
* Pull downloads + merges

**LVM**
Flexible storage management without repartitioning.

---

## Teach Back

### What is Git Branching?

Git branches allow developers to work independently without affecting the main project. Each feature or bug fix is developed on its own branch and merged later. This keeps the main branch stable and makes collaboration easier.

---

## What I Learned

* Revision helps identify weak areas.
* Practice improves command confidence.
* Teaching reinforces understanding.


# Revision Commands

## Linux

```bash
ls
cd
pwd
cp
mv
rm
chmod
chown
systemctl
ss
ping
curl
```

## Shell

```bash
echo
read
if
case
for
while
function
grep
awk
sed
crontab -e
```

## Git

```bash
git init
git add
git commit
git push
git pull
git fetch
git merge
git rebase
git stash
git cherry-pick
git reset
git revert
```

## GitHub CLI

```bash
gh auth login
gh repo create
gh issue create
gh pr create
gh run list
```
