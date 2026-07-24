# Day 40 – Your First GitHub Actions Workflow

## What is GitHub Actions?

GitHub Actions is GitHub's built-in CI/CD platform that automates workflows like building, testing, and deploying applications whenever code changes are pushed to a repository.

---

## Task 1 – Repository Setup

Created a new repository:

```
github-actions-practice
```

Created workflow directory:

```
.github/workflows/
```

---

## Task 2 – Hello Workflow

Created `hello.yml`

Features:

- Trigger on every push
- One job named **greet**
- Runs on Ubuntu runner
- Checks out repository
- Prints Hello message

---

## Task 3 – Workflow Anatomy

### on:

Defines when the workflow starts.

### jobs:

Contains one or more jobs executed by GitHub Actions.

### runs-on:

Specifies the operating system of the runner.

### steps:

List of tasks executed inside a job.

### uses:

Runs a reusable GitHub Action.

### run:

Executes shell commands.

### name:

Provides a readable name for the workflow or step.

---

## Task 4 – Additional Steps

Added steps to:

- Print current date and time
- Print current branch
- List repository files
- Print runner operating system

---

## Task 5 – Failed Pipeline

Added:

```bash
exit 1
```

The workflow failed and displayed a red ❌.

After fixing the error and pushing again, the workflow completed successfully with a green ✅.

---

## What I Learned

- GitHub Actions automates CI/CD workflows.
- Every push can automatically trigger a pipeline.
- Logs make debugging workflow failures easier.
- GitHub-hosted runners execute jobs in the cloud.


# – GitHub Actions

## Workflow Location

```text
.github/workflows/
```

---

## Trigger

```yaml
on:
  push:
```

---

## Job

```yaml
jobs:
```

---

## Runner

```yaml
runs-on: ubuntu-latest
```

---

## Steps

```yaml
steps:
```

---

## GitHub Action

```yaml
uses: actions/checkout@v4
```

---

## Run Commands

```yaml
run: echo "Hello"
```

---

## GitHub Variables

```yaml
${{ github.ref_name }}

${{ runner.os }}
```

---

## Important Commands

```bash
git add .
git commit -m "Day 40"
git push
```
