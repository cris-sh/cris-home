---
title: Cuadremos
description: Una API REST para dividir gastos compartidos y quedar a paz y salvo, construida con estándares de producción desde el primer commit.
date: 2026-09-05
status: in-progress
tags: [Java, Spring Boot, PostgreSQL, Flyway, JWT, GitHub Actions]
repo: https://github.com/cris-sh/cuadremos
---

## Qué es

Cuadremos es una API REST para dividir gastos entre amigos, familia, roommates o compañeros de viaje. Creas un grupo, registras quién pagó qué, y la API calcula quién le debe a quién y cuáles son los pagos mínimos para quedar a paz y salvo.

Si has usado apps como Splitwise o Tricount, la idea te resultará familiar.

## Por qué lo estoy construyendo

En el día a día trabajo sobre todo con Go y TypeScript. Para este proyecto elegí Java y Spring Boot a propósito: la forma más rápida en que aprendo un stack es entregando algo real con él, no siguiendo tutoriales.

Por eso lo trato como un producto y no como un ejercicio. La arquitectura por capas, la seguridad, las pruebas automatizadas, las migraciones versionadas de base de datos y la integración continua estaban listas antes de terminar la primera funcionalidad.

## Cómo lo abordo

- **Seguridad desde el inicio, no al final.** Las contraseñas se protegen con el algoritmo que OWASP recomienda hoy, las sesiones son cortas y sin estado, y un login fallido nunca revela si la cuenta existe.
- **Permisos fáciles de razonar.** Cada grupo tiene miembros, admins y exactamente un dueño. Esa última regla la garantiza el propio modelo de datos, no un código que podría olvidar revisarla.
- **El historial de plata compartida nunca se borra.** Un grupo se archiva: se puede seguir consultando, pero ya no admite cambios.
- **La base de datos se versiona como el código.** Cada cambio de esquema es una migración revisada, así que cualquier entorno se reconstruye igual.
- **Verificado en cada push.** Las pruebas unitarias y de integración corren solas antes de integrar cualquier cambio.

## En qué va

Cuentas, login, grupos, roles, permisos, traspaso de propiedad y archivado ya están listos. Siguen las invitaciones y después los gastos como tal (división igual, exacta y por porcentaje, que siempre cuadra al centavo), los balances y las sugerencias de pago con el mínimo de transferencias.

En el repositorio está todo el detalle técnico: arquitectura, modelo de datos, referencia de la API y el porqué de cada decisión de diseño.
