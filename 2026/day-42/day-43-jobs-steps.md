# Day 43 – Jobs, Steps, Environment Variables & Conditionals

## Objective

Day 43 focused on controlling the flow of GitHub Actions workflows.

I learned:

- Multiple jobs
- Job dependencies
- Environment variables
- Job outputs
- Conditional execution
- `continue-on-error`
- Parallel jobs
- Summary jobs

---

# Task 1 – Multi-Job Workflow

File:

`.github/workflows/multi-job.yml`

```yaml
name: Multi Job Pipeline

on:
  push:

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Build application
        run: echo "Building the app"

  test:
    needs: build
    runs-on: ubuntu-latest

    steps:
      - name: Run tests
        run: echo "Running tests"

  deploy:
    needs: test
    runs-on: ubuntu-latest

    steps:
      - name: Deploy application
        run: echo "Deploying"