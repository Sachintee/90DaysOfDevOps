# Day 33 – Docker Compose: Multi-Container Basics

## What is Docker Compose?

Docker Compose is a tool used to define and manage multi-container Docker applications using a single YAML file.

Instead of running multiple `docker run` commands, all services can be started with one command.

---

## Task 1 – Install & Verify

Verify Docker Compose installation.

```bash
docker compose version
```

---

## Task 2 – First Compose File

Create a folder:

```text
compose-basics/
```

Create a `docker-compose.yml` file to run an Nginx container.

Start:

```bash
docker compose up -d
```

Stop:

```bash
docker compose down
```

---

## Task 3 – WordPress + MySQL

Create a Compose file containing:

- WordPress
- MySQL

Features:

- Shared network
- Named volume
- Environment variables
- Port mapping

Verify data persistence after restarting.

---

## Task 4 – Compose Commands

Practice:

- up
- down
- stop
- ps
- logs
- logs -f
- build

---

## Task 5 – Environment Variables

Store variables inside a `.env` file.

Reference them inside `docker-compose.yml`.

Compose automatically loads `.env`.

---

## What I Learned

- Docker Compose manages multiple containers.
- Services communicate using service names.
- Named volumes preserve data.
- One YAML file replaces multiple Docker commands.


# – Docker Compose

## Verify

```bash
docker compose version
```

## Start

```bash
docker compose up -d
```

## Stop

```bash
docker compose stop
docker compose down
```

## View

```bash
docker compose ps
docker compose logs
docker compose logs -f wordpress
```

## Rebuild

```bash
docker compose up --build
```

## Environment File

```text
.env
```

## Important Commands

```bash
docker compose up
docker compose down
docker compose ps
docker compose logs
docker compose stop
docker compose restart
docker compose build
docker compose version
```
