# Day 39 – What is CI/CD?

## What Problem Does CI/CD Solve?

When multiple developers manually deploy code, several problems can occur:

- Code conflicts
- Deployment errors
- Human mistakes
- Different environments
- Slow release process

### "It Works on My Machine"

This means the application works on a developer's computer but fails in testing or production because of different configurations or dependencies.

Manual deployments are risky and usually limited to a few times per day.

---

# CI vs CD

## Continuous Integration (CI)

Developers frequently merge code into a shared repository. Every commit automatically triggers build and testing to detect issues early.

**Example:** GitHub Actions automatically runs tests after every push.

---

## Continuous Delivery (CD)

The application is automatically built and tested, then prepared for deployment. A manual approval is required before releasing to production.

**Example:** Deploying to a staging environment and waiting for approval.

---

## Continuous Deployment

Every successful build is automatically deployed to production without manual intervention.

**Example:** Netflix automatically deploying successful builds.

---

# Pipeline Anatomy

### Trigger

Starts the pipeline (Push, Pull Request, Schedule).

### Stage

A logical phase such as Build, Test, or Deploy.

### Job

A collection of related steps executed by a runner.

### Step

A single command or action inside a job.

### Runner

The machine or virtual environment that executes the pipeline.

### Artifact

Files generated during the pipeline (Docker Image, JAR, ZIP, Reports).

---

# Pipeline Diagram

Developer Pushes Code

↓

GitHub Repository

↓

Build Stage

↓

Test Stage

↓

Docker Build

↓

Deploy to Staging

↓

Deployment Successful

---

# Open Source Workflow

Repository: Kubernetes

Workflow Folder:

.github/workflows/

Trigger:

Push & Pull Request

Jobs:

Multiple jobs

Purpose:

Build, Test, Validate, Security Checks and Deployment

---

# What I Learned

- CI detects issues early.
- CD automates software delivery.
- Pipelines improve deployment speed and reliability.
- Automation reduces human errors.


# CI/CD Concepts

## CI

- Build
- Test
- Merge Code

## Continuous Delivery

- Auto Build
- Auto Test
- Manual Production Approval

## Continuous Deployment

- Auto Build
- Auto Test
- Auto Production Deployment

---

## Pipeline Components

Trigger

Stage

Job

Step

Runner

Artifact

---

## Pipeline Flow

```text
Developer
    │
    ▼
GitHub Push
    │
    ▼
Build
    │
    ▼
Test
    │
    ▼
Docker Build
    │
    ▼
Deploy
```

---

## Important Terms

- CI
- CD
- Pipeline
- Workflow
- Runner
- Artifact
- Trigger
- Stage
- Job
- Step
