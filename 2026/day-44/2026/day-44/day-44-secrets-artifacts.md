# Day 44 – Secrets, Artifacts & Running Real Tests in CI

## Objective

Today I learned how to use GitHub Actions for real CI tasks:

- GitHub Secrets
- Secret environment variables
- Artifacts
- Passing artifacts between jobs
- Running real tests
- Intentionally detecting test failures
- Dependency caching

---

## Task 1: GitHub Secrets

I created a repository secret:

```text
MY_SECRET_MESSAGE