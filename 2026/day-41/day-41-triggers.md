# Day 41 – GitHub Actions: Triggers & Matrix Builds

## Task 1 – Pull Request Trigger

Created `pr-check.yml`.

Features:

- Runs only on Pull Requests targeting `main`
- Prints the source branch name
- Automatically executes when a PR is opened or updated

---

## Task 2 – Scheduled Workflow

Added a scheduled trigger using Cron.

```yaml
schedule:
  - cron: '0 0 * * *'
```

Runs every day at **12:00 AM UTC**.

### Every Monday at 9:00 AM UTC

```text
0 9 * * 1
```

---

## Task 3 – Manual Workflow

Created `manual.yml`.

Features:

- Uses `workflow_dispatch`
- Accepts an environment input
- Prints the selected environment
- Can be executed manually from the GitHub Actions tab

---

## Task 4 – Matrix Builds

Created `matrix.yml`.

Matrix includes:

- Python 3.10
- Python 3.11
- Python 3.12

Extended matrix with:

- Ubuntu
- Windows

Total Jobs:

3 × 2 = **6 parallel jobs**

---

## Task 5 – Exclude & Fail Fast

Excluded:

- Python 3.10 on Windows

Remaining jobs:

**5**

### fail-fast: true

Stops all remaining jobs after the first failure.

### fail-fast: false

Allows every matrix job to continue even if one fails.

---

## What I Learned

- GitHub Actions supports multiple workflow triggers.
- Matrix builds execute jobs in parallel.
- Cron schedules automate recurring workflows.
- Manual workflows are useful for deployments.
- Excluding matrix combinations avoids unnecessary executions.



# Day 41 – Triggers & Matrix Builds

## Pull Request Trigger

```yaml
on:
  pull_request:
    branches:
      - main
```

---

## Schedule Trigger

```yaml
on:
  schedule:
    - cron: '0 0 * * *'
```

Monday 9 AM

```text
0 9 * * 1
```

---

## Manual Trigger

```yaml
workflow_dispatch:
```

Input

```yaml
inputs:
  environment:
```

---

## Matrix Strategy

```yaml
strategy:
  matrix:
```

Python Versions

```text
3.10
3.11
3.12
```

Operating Systems

```text
ubuntu-latest
windows-latest
```

Total Jobs

```text
6
```

---

## Exclude

```yaml
exclude:
  - os: windows-latest
    python-version: "3.10"
```

---

## Fail Fast

```yaml
fail-fast: false
```

---

## Important GitHub Actions Keywords

- pull_request
- workflow_dispatch
- schedule
- cron
- matrix
- strategy
- exclude
- fail-fast
