# Day 29 – Introduction to Docker

## What is Docker?

Docker is a platform that packages applications with all dependencies into lightweight containers.

### Why Containers?

- Lightweight
- Portable
- Fast deployment
- Same environment everywhere

---

## Containers vs Virtual Machines

| Container | Virtual Machine |
|-----------|-----------------|
| Shares host OS | Own Guest OS |
| Lightweight | Heavy |
| Fast startup | Slow startup |
| Low resource usage | High resource usage |

---

## Docker Architecture

- Docker Client → Sends commands
- Docker Daemon → Builds & runs containers
- Docker Images → Templates
- Docker Containers → Running instances
- Docker Hub → Image Registry

Flow:

Docker Client → Docker Daemon → Docker Image → Docker Container

---

## Docker Installation

- Install Docker
- Verify installation
- Run `hello-world`

---

## Working with Containers

- Run Nginx container
- Run Ubuntu in interactive mode
- List running containers
- Stop & remove containers

---

## Docker Features

- Detached Mode (`-d`)
- Interactive Mode (`-it`)
- Port Mapping (`-p`)
- Custom Container Name (`--name`)
- View Logs
- Execute commands inside a container

---

## What I Learned

- Docker simplifies application deployment.
- Containers are lightweight compared to VMs.
- Docker Hub provides ready-to-use images.

# – Docker Basics

## Install Docker

```bash
sudo apt update
sudo apt install docker.io -y
sudo systemctl enable docker
sudo systemctl start docker
docker --version
```

## Verify Installation

```bash
docker run hello-world
```

## Run Containers

```bash
docker run nginx
docker run -it ubuntu bash
docker run -d nginx
docker run --name my-nginx -d -p 8080:80 nginx
```

## Container Management

```bash
docker ps
docker ps -a
docker stop <container>
docker rm <container>
```

## Logs & Exec

```bash
docker logs my-nginx
docker exec -it my-nginx bash
```

## Important Commands

```bash
docker run
docker ps
docker stop
docker rm
docker logs
docker exec
docker images
docker pull
```
