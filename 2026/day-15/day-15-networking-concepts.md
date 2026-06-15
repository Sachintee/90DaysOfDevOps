## Task

Build on Day 14 by understanding the building blocks of networking every DevOps engineer must know.

You will:

* Understand how **DNS** resolves names to IPs
* Learn **IP addressing** (IPv4, public vs private)
* Break down **CIDR notation** and **subnetting** basics
* Know common **ports** and why they matter

---

## Challenge Tasks

### Task 1: DNS – How Names Become IPs

When I type `google.com` in a browser, the system queries a DNS resolver to translate the domain name into an IP address. The browser then connects to that IP using HTTPS and loads the website.

**DNS Record Types:**

* **A:** Maps a domain to an IPv4 address.
* **AAAA:** Maps a domain to an IPv6 address.
* **CNAME:** Creates an alias for another domain.
* **MX:** Specifies mail servers for a domain.
* **NS:** Identifies authoritative name servers.

```bash
dig google.com
```

**Example Output:**

* A Record: `142.250.183.14`
* TTL: `300`

---

### Task 2: IP Addressing

An IPv4 address is a 32-bit number written in four octets, for example `192.168.1.10`.

* **Public IP:** Accessible over the internet (e.g., `8.8.8.8`)
* **Private IP:** Used within local networks (e.g., `192.168.1.10`)

**Private IP Ranges:**

* `10.0.0.0/8`
* `172.16.0.0/12`
* `192.168.0.0/16`

```bash
ip addr show
```

My private IP: `192.168.x.x`

---

### Task 3: CIDR & Subnetting

`/24` means the first 24 bits represent the network portion of the address.

Subnetting helps organize networks, improve security, and reduce broadcast traffic.

| CIDR | Subnet Mask     | Total IPs | Usable Hosts |
| ---- | --------------- | --------- | ------------ |
| /24  | 255.255.255.0   | 256       | 254          |
| /16  | 255.255.0.0     | 65,536    | 65,534       |
| /28  | 255.255.255.240 | 16        | 14           |

---

### Task 4: Ports – The Doors to Services

A port identifies a specific service running on a device.

| Port  | Service |
| ----- | ------- |
| 22    | SSH     |
| 80    | HTTP    |
| 443   | HTTPS   |
| 53    | DNS     |
| 3306  | MySQL   |
| 6379  | Redis   |
| 27017 | MongoDB |

```bash
ss -tulpn
```

**Examples:**

* Port 22 → SSH
* Port 53 → DNS

---

### Task 5: Putting It Together

**`curl http://myapp.com:8080`**

DNS resolves `myapp.com` to an IP address. The request uses TCP/IP and connects to port `8080` using HTTP.

**Database connection issue: `10.0.1.50:3306`**

First, verify network connectivity, check if port `3306` is open, confirm the database service is running, and review firewall/security group rules.

---

## What I Learned

1. DNS converts domain names into IP addresses.
2. CIDR notation defines network size and usable hosts.
3. Ports allow multiple services to run on a single machine.

---
