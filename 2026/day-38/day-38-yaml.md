# Day 38 – YAML Basics

## What is YAML?

YAML (YAML Ain't Markup Language) is a human-readable data serialization language widely used for configuration files in DevOps tools like Kubernetes, Docker Compose, GitHub Actions, Ansible, and CI/CD pipelines.

---

## Task 1 – Key-Value Pairs

Created `person.yaml` with:

- Name
- Role
- Experience
- Learning status

---

## Task 2 – Lists

Added:

- DevOps tools (block list)
- Hobbies (inline list)

### List Types

**Block List**

```yaml
tools:
  - Docker
  - Git
```

**Inline List**

```yaml
hobbies: [Coding, Reading, Cricket]
```

---

## Task 3 – Nested Objects

Created `server.yaml` containing:

- Server details
- Database details
- Nested credentials

---

## Task 4 – Multi-line Strings

### |

Preserves line breaks.

### >

Converts multiple lines into a single line.

---

## Task 5 – YAML Validation

Validated files using **yamllint**.

Incorrect indentation produced an error.

After fixing indentation, validation passed successfully.

---

## Task 6 – Common Mistake

YAML uses **spaces only**.

Tabs cause validation errors.

---

## What I Learned

- YAML depends on indentation.
- Lists can be block or inline.
- Nested objects improve readability.
- `|` preserves formatting, `>` folds text into one line.

# – YAML Basics -

## Key Value

```yaml
name: Sachin
role: DevOps Learner
learning: true
```

---

## Lists

```yaml
tools:
  - Docker
  - Git
```

```yaml
hobbies: [Coding, Reading, Cricket]
```

---

## Nested Objects

```yaml
server:
  name: web-server
  ip: 192.168.1.10
```

---

## Multi-line

```yaml
script: |
  echo Hello
  pwd
```

```yaml
script: >
  echo Hello
  pwd
```

---

## Validation

```bash
sudo apt install yamllint

yamllint person.yaml

yamllint server.yaml
```

---

## Important Rules

- Use spaces only
- Never use tabs
- 2-space indentation
- true/false are booleans
- Quotes optional

---

## Important Commands

```bash
cat person.yaml
cat server.yaml
yamllint person.yaml
yamllint server.yaml
```
