---
title: "Why Run a DNS Server on Kubernetes?"
description: "Getting trolled by a friend for overengineering my homelab: I have a valid justification"
datetime: 2026-01-28
image: "https://cdn.isujith.dev/bind9_dns.png"
tags: ["Bind9", "Kubernetes", "DNS", "Terraform", "DevOps", "Homelab"]
---

## Context

In my homelab, I constantly create and delete services while tinkering. That naturally leads to frequent DNS changes. I wanted a **reliable, self-hosted DNS solution** that integrates cleanly with Kubernetes and supports automation.

Bind9 felt like the right choice: stable, flexible, and well understood. This post explains **why I run Bind9 inside Kubernetes** and **why that decision is not just “overengineering.”**

## The Valid Criticism

I hear you:

> _“Why put a simple DNS server into Kubernetes and deal with volumes, pods, and extra complexity?”_

This is a valid argument. A friend made the same point and honestly, he was not wrong.

But infrastructure choices are not just about fancy things or simple things. They’re about **trade offs**. What matters is **what you gain vs what you lose**.

## Why Bind9 and Why on Kubernetes?

At this point, **everything in my homelab runs on Kubernetes**.

My setup:

- 2-node Proxmox cluster (Lenovo Tiny PCs)
- 1 Gbps network

VM live migration sounds fancy until you watch it crawl on a 1Gigabit. If a node dies mid migration, you’re stuck waiting. Moving entire virtual machines over a slow network just isn’t worth it.

Kubernetes solves this problem naturally.

Instead of migrating machines, it **recreates workloads**:

- Containers restart faster than VMs migrate
- Network configuration stays intact
- Failures are boring and predictable

All infrastructure lives **inside the cluster**, not tied to Proxmox-specific HA features. Proxmox becomes exactly what it should be: **boring, stable compute**.

## Declarative Infrastructure

The real win is **declarative control**.

- DNS records are defined in Terraform
- Kubernetes manifests describe runtime state
- Changes are done via Git
- The cluster converges automatically

(This is not true, I haven't implemented Semaphore)
Soon, Semaphore will sit on top and make this even smoother.

With limited bandwidth and frequent experimentation, Kubernetes isn’t overkill it’s **practical**.

So yes, Bind9 on Kubernetes _looks_ complex overengineering from the outside.  
But inside this system, it’s the **simplest consistent choice**.

---

## References

- **Terraform DNS module**  
  https://github.com/SujithThirumalaisamy/homelab/tree/main/terraform/dns

- **Kubernetes Manifests**  
  https://gist.github.com/SujithThirumalaisamy/49c30047931971b6acccc6a348dfdc90
