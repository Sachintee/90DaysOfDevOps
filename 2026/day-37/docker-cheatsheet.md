# Docker Cheat Sheet

## Container Commands

```bash
docker run IMAGE                 # Run a container
docker run -it IMAGE             # Interactive mode
docker run -d IMAGE              # Detached mode
docker ps                        # Running containers
docker ps -a                     # All containers
docker stop CONTAINER            # Stop container
docker start CONTAINER           # Start container
docker restart CONTAINER         # Restart container
docker rm CONTAINER              # Remove container
docker exec -it CONTAINER bash   # Enter container
docker logs CONTAINER            # View logs
docker logs -f CONTAINER         # Follow logs
```

---

## Image Commands

```bash
docker images
docker pull IMAGE
docker build -t NAME:TAG .
docker tag IMAGE USER/IMAGE:TAG
docker push USER/IMAGE:TAG
docker rmi IMAGE
docker image history IMAGE
docker inspect IMAGE
```

---

## Volume Commands

```bash
docker volume create VOLUME
docker volume ls
docker volume inspect VOLUME
docker volume rm VOLUME
```

---

## Network Commands

```bash
docker network create NETWORK
docker network ls
docker network inspect NETWORK
docker network connect NETWORK CONTAINER
```

---

## Docker Compose

```bash
docker compose up -d
docker compose down
docker compose stop
docker compose restart
docker compose ps
docker compose logs
docker compose logs -f
docker compose up --build
docker compose up --scale web=3
```

---

## Cleanup

```bash
docker system df
docker system prune
docker image prune
docker container prune
docker volume prune
docker network prune
```

---

## Dockerfile Instructions

```dockerfile
FROM         # Base Image
RUN          # Execute commands
COPY         # Copy files
ADD          # Copy & extract archives
WORKDIR      # Working directory
EXPOSE       # Document port
ENV          # Environment variable
USER         # Non-root user
CMD          # Default command
ENTRYPOINT   # Main executable
```
