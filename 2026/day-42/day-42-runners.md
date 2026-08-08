## GitHub-Hosted Runners

A GitHub-hosted runner is a temporary machine managed by GitHub that executes workflow jobs.

Common runners:
ubuntu-latest
windows-latest
macos-latest

## Self-Hosted Runner

A self-hosted runner is a machine managed by us and registered with a GitHub repository or organization.
Workflow target:
runs-on: self-hosted
With a label:
runs-on: [self-hosted, linux, my-linux-runner]
Runner Information

## Useful commands:
uname -a
hostname
whoami
pwd

## Pre-installed Tools
docker --version
python3 --version
node --version
git --version

Pre-installed tools reduce setup time and make CI jobs faster and more consistent.

## Self-Hosted Runner Setup
On GitHub:

Repository
→ Settings
→ Actions
→ Runners
→ New self-hosted runner
→ Linux

Run the commands GitHub provides on the selected machine.
Start temporarily:
./run.sh
Run as a service:
sudo ./svc.sh install
sudo ./svc.sh start
Self-Hosted Workflow

name: Self Hosted Runner

on:
  push:

jobs:
  runner-test:
    runs-on: [self-hosted, linux, my-linux-runner]

    steps:
      - name: Hostname
        run: hostname

      - name: Working Directory
        run: pwd

      - name: Create File
        run: |
          echo "Created by GitHub Actions" > runner-test.txt
          ls -l runner-test.txt

# GitHub-Hosted vs Self-Hosted

| Feature | GitHub-Hosted | Self-Hosted |
|---|---|---|
| Management | GitHub | Me |
| Cost | Usage-based/free allowance depending on plan | My machine/VM cost |
| Tools | Many pre-installed tools | i install/manage tools |
| Good for | General CI/CD | Custom environments and private infrastructure |
| Security | Managed environment | i am responsible for hardening |

## Labels      
Labels allow jobs to target a specific runner.
Example:

runs-on: [self-hosted, linux, my-linux-runner]

This is useful when multiple runners have different OS, hardware, tools, or environments.

## Key Learnings

GitHub-hosted runners are managed by GitHub.
Self-hosted runners give control over the execution environment.
Labels help route jobs to the correct runner.


## *Implementation GitHub-Hosted* ##

runs-on: ubuntu-latest
runs-on: windows-latest
runs-on: macos-latest

Runner Info

hostname
whoami
pwd
uname -a
Check Tools

docker --version
python3 --version
node --version
git --version

Self-Hosted
runs-on: self-hosted
With Label
runs-on: [self-hosted, linux, my-linux-runner]
Runner Service

./run.sh
sudo ./svc.sh install
sudo ./svc.sh start

GitHub Path

Settings
→ Actions
→ Runners
→ New self-hosted runner
→ Linux

Main Difference
GitHub-hosted = GitHub manages the machine.Self-hosted = You manage the machine.

Labels
Labels route jobs to specific runners.

## Important

Never expose secrets on a self-hosted runner.Use a dedicated and properly secured machine for untrusted workloads.
