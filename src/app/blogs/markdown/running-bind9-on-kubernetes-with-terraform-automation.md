---
title: "[WIP] Running Bind9 on Kubernetes with Terraform Automation"
description: "Step-by-step guide to deploying Bind9 on Kubernetes, storing configurations on TrueNAS, and automating DNS with Terraform."
datetime: 2025-10-22
tags:
  ["Bind9", "Kubernetes", "DNS", "Terraform", "TrueNAS", "DevOps", "Homelab"]
---

## Introduction

In my homelab, I wanted a **reliable, self-hosted DNS solution** that integrates directly with Kubernetes.  
Bind9 provides the stability and flexibility I need, while Terraform automates DNS record management, making deployments seamless.

This guide walks through **deploying Bind9 on Kubernetes**, storing configs on **TrueNAS**, and automating DNS with **Terraform**.

---

## Why Bind9 on Kubernetes?

Running Bind9 inside Kubernetes allows:

- **Self-contained management**: all DNS infrastructure runs in-cluster.
- **Scaling & high availability**: Kubernetes handles pod scheduling and service exposure.
- **Integration with automation**: easily update configs via Terraform and secrets.

In my setup, Bind9 handles:

- Plain DNS on port **53**
- DNS-over-TLS (DoT) on port **853**
- DNS-over-HTTPS (DoH) on port **443**

---

## Prerequisites

- Kubernetes cluster (K3s in my homelab)
- TrueNAS storage with NFS shares
- Ansible/Terraform installed for automation
- TLS certificates signed by **Cloudflare DNS Resolver**
- Dedicated **bind** user for file permissions

---

## Step 1: Prepare Configurations

### Named Configs

Store your `named.conf` and zone files in **NFS share on TrueNAS**:

```text
/nfs/bind9/
├── named.conf
├── named.conf.options
└── zones/
    └── home.isujith.dev.db
```

- Use dedicated TrueNAS users for bind to avoid permission issues.
- Certificates for DoT/DoH are stored as Kubernetes secrets.

### Kubernetes Secrets

Create TLS and TSIG secrets:

```bash
kubectl create secret generic bind-tls \
  --from-file=tls.crt=cert.pem \
  --from-file=tls.key=key.pem

kubectl create secret generic bind-tsig \
  --from-literal=key="YOUR_TSIG_KEY"
```

```

```

### Step 2: Deploy Bind9 on Kubernetes

Deployment Manifest

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: bind9
spec:
  replicas: 1
  selector:
    matchLabels:
      app: bind9
  template:
    metadata:
      labels:
        app: bind9
    spec:
      containers:
        - name: bind9
          image: internetsystemsconsortium/bind9:9.18
          ports:
            - containerPort: 53
              protocol: UDP
            - containerPort: 53
              protocol: TCP
            - containerPort: 853
            - containerPort: 443
          volumeMounts:
            - name: bind-config
              mountPath: /etc/bind
            - name: tls-secret
              mountPath: /etc/bind/tls
              readOnly: true
      volumes:
        - name: bind-config
          persistentVolumeClaim:
            claimName: bind9-pvc
        - name: tls-secret
          secret:
            secretName: bind-tls
```

```

```
