# Day 30 – Docker Images & Container Lifecycle

## Docker Images

### What is a Docker Image?
A Docker image is a read-only template used to create containers.

### Images Used
- nginx
- ubuntu
- alpine

### Ubuntu vs Alpine

| Ubuntu | Alpine |
|---------|---------|
| Large (~70MB+) | Small (~5MB) |
| More packages | Minimal packages |
| General purpose | Lightweight containers |

---

## Image Layers

- Docker images are built in multiple layers.
- Each layer stores only the changes.
- Layers are reused between images to save storage and speed up builds.

---

## Container Lifecycle

Created → Running → Paused → Running → Stopped → Restarted → Killed → Removed

---

## Working with Containers

- Run container in detached mode.
- View logs.
- Follow live logs.
- Execute commands inside a running container.
- Inspect container details (IP, Ports, Mounts).

---

## Docker Cleanup

- Stop all running containers.
- Remove stopped containers.
- Remove unused images.
- Check Docker disk usage.

---

## What I Learned

- Images are templates; containers are running instances.
- Docker layers improve efficiency.
- Understanding the container lifecycle is essential for DevOps.


# – Docker Images

## Pull Images

```bash
docker pull nginx
docker pull ubuntu
docker pull alpine
```

## Images

```bash
docker images
docker image inspect nginx
docker image history nginx
docker rmi <image-id>
```

## Container Lifecycle

```bash
docker create nginx
docker start <container>
docker pause <container>
docker unpause <container>
docker stop <container>
docker restart <container>
docker kill <container>
docker rm <container>
```

## Running Containers

```bash
docker run -d --name my-nginx -p 8080:80 nginx
docker logs my-nginx
docker logs -f my-nginx
docker exec -it my-nginx bash
docker exec my-nginx ls
docker inspect my-nginx
```

## Cleanup

```bash
docker stop $(docker ps -q)
docker container prune
docker image prune
docker system df
docker system prune
```

## Important Commands

```bash
docker images
docker image history
docker inspect
docker create
docker start
docker pause
docker unpause
docker stop
docker restart
docker kill
docker rm
docker system prune
```
