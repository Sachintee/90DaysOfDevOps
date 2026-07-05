# Day 32 – Docker Volumes & Networking

## Docker Volumes

Containers are temporary. If a container is removed, its data is lost unless stored in a volume.

### Why Volumes?
- Store persistent data
- Share data between containers
- Keep data independent of container lifecycle

---

## Named Volumes

A named volume is managed by Docker and stores data outside the container.

Advantages:
- Persistent
- Easy to backup
- Docker managed

---

## Bind Mounts

A bind mount maps a host directory directly into a container.

Advantages:
- Live file updates
- Ideal for development
- Uses host filesystem

### Named Volume vs Bind Mount

| Named Volume | Bind Mount |
|--------------|------------|
| Docker managed | Host managed |
| Better for databases | Better for development |
| Portable | Depends on host path |

---

## Docker Networking

Docker allows containers to communicate using networks.

Types:
- bridge (default)
- host
- none
- custom bridge

---

## Default Bridge

- Containers communicate using IP address.
- Name resolution is limited.

---

## Custom Bridge Network

- Containers communicate using container names.
- Better isolation.
- Recommended for multi-container applications.

---

## What I Learned

- Volumes keep data safe after container removal.
- Bind mounts synchronize host files instantly.
- Custom bridge networks enable container-to-container communication using names.




# Docker Volumes & Networking

## Docker Volume

```bash
docker volume create mydata
docker volume ls
docker volume inspect mydata
```

## Database Container

```bash
docker run -d \
--name postgres-db \
-v mydata:/var/lib/postgresql/data \
postgres
```

## Bind Mount

```bash
docker run -d \
-p 8080:80 \
-v $(pwd):/usr/share/nginx/html \
nginx
```

## Docker Networks

```bash
docker network ls
docker network inspect bridge
docker network create my-app-net
```

## Run Containers

```bash
docker run -dit --name app1 --network my-app-net ubuntu
docker run -dit --name app2 --network my-app-net ubuntu
docker exec app1 ping app2
```

## Important Commands

```bash
docker volume create
docker volume ls
docker volume inspect
docker network create
docker network ls
docker network inspect
docker exec
docker run -v
docker run --network
```
