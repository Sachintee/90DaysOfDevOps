# Day 26 – GitHub CLI (gh)

## Install & Authenticate

### What is GitHub CLI?

GitHub CLI (`gh`) lets you manage GitHub directly from the terminal without opening a browser.

### Authentication Methods

* Web browser login
* Personal Access Token (PAT)
* SSH authentication

---

## Working with Repositories

### What I Learned

* Created a repository from the terminal.
* Cloned repositories using `gh`.
* Listed and viewed repositories.
* Opened repositories in the browser.
* Deleted a test repository.

---

## Issues

### What is an Issue?

Issues help track bugs, feature requests, and tasks.

### Automation Use

`gh issue` can automatically create, list, or close issues in scripts and CI/CD pipelines.

---

## Pull Requests

### What I Learned

* Created a Pull Request from the terminal.
* Listed and viewed PRs.
* Merged a PR without using GitHub UI.

### Merge Methods

* Merge Commit
* Squash Merge
* Rebase Merge

### Reviewing PRs

Use `gh pr view` and `gh pr checkout` to review changes before merging.

---

## GitHub Actions

### Why use gh workflow?

* Monitor workflow runs
* Check CI/CD status
* View failed jobs from the terminal

---

## Useful gh Commands

* `gh api`
* `gh gist`
* `gh release`
* `gh alias`
* `gh search repos`

---

## What I Learned

* GitHub can be managed completely from the terminal.

GitHub CLI Commands
Install
sudo apt install gh
gh --version
Login
gh auth login
gh auth status
Repository
gh repo create
gh repo clone owner/repo
gh repo view
gh repo list
gh repo delete
gh repo view --web
Issues
gh issue create
gh issue list
gh issue view 1
gh issue close 1
Pull Requests
gh pr create
gh pr list
gh pr view
gh pr merge
GitHub Actions
gh run list
gh run view
Useful Commands
gh api
gh gist create
gh release create
gh alias set
gh search repos
* GitHub CLI speeds up daily DevOps workflows.
* `gh` is useful for automation and CI/CD.
