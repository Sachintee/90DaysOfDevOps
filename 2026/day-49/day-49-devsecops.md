# Day 49 – DevSecOps: Add Security to Your CI/CD Pipeline

## Objective

The objective of Day 49 was to integrate security checks into the GitHub Actions CI/CD pipeline created during Day 48.

The pipeline now performs dependency security review and Docker image vulnerability scanning before production deployment. This makes security an automated part of the CI/CD process instead of a separate manual activity.

---

# What is DevSecOps?

DevSecOps means integrating security into the software development and CI/CD process.

Instead of waiting until an application reaches production before checking for vulnerabilities, automated security checks are performed during development, pull requests, and deployment.

---

# DevSecOps Principles

1. Catch security problems early.
2. Automate security checks.
3. Block critical vulnerabilities.
4. Never hard-code secrets.
5. Follow least-privilege permissions.

---

# Day 49 Security Pipeline

## Pull Request

```text
PR opened
    ↓
Dependency Review
    ↓
Build & Test
    ↓
PR Checks