---
title: "What’s in My Homelab?"
description: "An inside look at my homelab, featuring a Proxmox-backed Kubernetes cluster with TrueNAS storage, built to experiment with DevOps tools and automation."
datetime: 2025-10-22
tags:
  [
    "Homelab",
    "DevOps",
    "Kubernetes",
    "Proxmox",
    "TrueNAS",
    "Terraform",
    "Ansible",
  ]
---

## Building My Homelab for DevOps

I’ve always wanted a safe space to experiment with **DevOps tools, infrastructure automation, and service hosting** without affecting production systems. Over time, my homelab has evolved into a **miniature production-grade environment** where I can test, learn, and iterate freely.

## What is the purpose of this homelab?

The main goal of this homelab is **learning DevOps by doing** — testing Kubernetes, Terraform, and storage automation in a realistic setup. It also serves as a sandbox to explore **CI/CD pipelines, observability stacks, and self-hosted services**, all on hardware I control.

## Hardware Setup

The core of my homelab consists of **two Lenovo Tiny nodes**, each with an **Intel i5 (8th Gen)** CPU and **32 GB RAM** — compact, power-efficient, and perfect for 24×7 operation. On top of these nodes, I run a **Proxmox cluster** that manages all virtual machines. VM provisioning is currently **manual via cloud-init**, with configuration automated using **Ansible**.

## Kubernetes Cluster

Within Proxmox, I run a **5-node K3s cluster** for lightweight, production-style orchestration. K3s provides the full Kubernetes experience with a smaller footprint, ideal for edge or homelab environments.

### Key Components

- **Networking:** MetalLB assigns load-balanced IPs from my LAN pool (`10.0.0.0/16`).
- **Storage:** TrueNAS VM (with 2 NVMe drives via passthrough) provides persistent volumes over NFS.
- **Configuration Management:** Ansible and Terraform maintain declarative consistency across the cluster.

This setup allows me to **deploy, test, and tear down services** easily while keeping configurations reusable.

## Storage with TrueNAS

Storage is a critical piece of my lab. TrueNAS manages datasets for:

- Persistent Kubernetes volumes
- Configuration backups
- Base configuration files (e.g., Bind9)
- Other services like Plex

Each **PVC mounts directly from NFS shares** on TrueNAS.  
To avoid permission issues, I’ve created **dedicated TrueNAS users** for services like Bind, ensuring smooth access control across the stack.

## Infrastructure Automation

Automation is at the heart of this lab:

- **Terraform** manages network and DNS infrastructure.
- **Ansible** configures VMs and Kubernetes nodes.
- **Kubernetes manifests** define applications declaratively.

Currently, Terraform is triggered from my terminal, but I plan to **integrate it into a CI/CD pipeline** and store the state securely on NAS.

## Future Plans

- Deploy **Pi-hole** for network-wide ad-blocking and local DNS caching
- Integrate **Prometheus + Grafana** for monitoring and alerting
- Fully automate provisioning with **Terraform + Ansible pipelines**
- Expand storage **redundancy and backup policies** for long-term reliability

## What did I learn?

Running a homelab taught me more than theory ever could.  
The biggest challenges were **file permissions and TrueNAS access**, but solving them deepened my understanding of storage, networking, and security integration.

In the next post, I’ll cover **running Bind9 on Kubernetes** and automating DNS with Terraform — a fully hands-on guide with manifests and code snippets.
