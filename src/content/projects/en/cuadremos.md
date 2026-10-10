---
title: Cuadremos
description: A REST API for splitting shared expenses and settling up, held to production standards from the first commit.
date: 2026-09-05
status: in-progress
tags: [Java, Spring Boot, PostgreSQL, Flyway, JWT, GitHub Actions]
repo: https://github.com/cris-sh/cuadremos
---

## What it is

Cuadremos (Colombian for "let's settle up") is a REST API for splitting shared expenses with friends, family, roommates or travel buddies. You create a group, log who paid for what, and the API works out who owes whom and the fewest payments needed to square things up.

If you've used Splitwise or Tricount, the idea will feel familiar.

## Why I'm building it

Day to day I work mostly with Go and TypeScript. I picked Java and Spring Boot for this one on purpose: I learn a stack fastest by shipping something real with it, not by following tutorials.

So it gets treated like a product, not an exercise. Layered architecture, security, automated tests, versioned database migrations and continuous integration were all in place before the first feature was finished.

## How I approach it

- **Security from the start, not bolted on.** Passwords are hashed with the algorithm OWASP currently recommends, sessions are short-lived and stateless, and a failed login never reveals whether an account exists.
- **Permissions people can reason about.** Every group has members, admins and exactly one owner. That last rule is guaranteed by the data model itself rather than by code that could forget to check.
- **Shared money history is never deleted.** A group gets archived instead: still readable, closed to changes.
- **The database is versioned like code.** Every schema change is a reviewed migration, so any environment can be rebuilt the same way.
- **Checked on every push.** Unit and integration tests run automatically before anything is merged.

## Where it stands

Accounts, login, groups, roles, permissions, ownership transfer and archiving are done. Invitations come next, followed by the expenses themselves (equal, exact and percentage splits that always add up to the cent), balances, and settle-up suggestions that minimise the number of payments.

The repository has the full technical picture: architecture, data model, API reference and the reasoning behind each design decision.
