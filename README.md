# share-list

> **Todo collaborative sans compte** — tu crées une liste, tu partages le lien, tout le monde édite en live.

[![Node 18+](https://img.shields.io/badge/node-18%2B-green)](https://nodejs.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Stack](https://img.shields.io/badge/stack-Express%20%2B%20SQLite-blue)](#)

### En 1 ligne
```bash
npm install && npm run dev # http://localhost:3000
# Créer → copier lien https://.../l/aB3x9K2p → partager sur WhatsApp
```

---

## Présentation

| Besoin | Comment share-list le résout | Exemple |
|---|---|---|
| **Courses / coloc** | 1 liste = 1 lien magique, pas de compte | `https://.../l/aB3x9K2p` envoyée au groupe |
| **Checklist projet** | Remplace Trello quand 1 liste suffit | Checklist déploiement à cocher à 3 |
| **Event bénévoles** | 10 personnes éditent sans inscription | Liste matériel / invités partagée |

Le lien **est** la permission (comme Google Doc “toute personne disposant du lien”). 0 friction = adoption instantanée.

---

## English — overview

Share-list is a collaborative to-do list app that lets people create a list and share it by link without creating accounts. It uses Express and SQLite, and updates items for people using the same shared list.

### What is it for, and why use it?

It is useful for small groups that need a lightweight checklist without a full project-management account system.

### Examples

- Share a grocery list with housemates.
- Coordinate event supplies or volunteer tasks.
- Keep a short deployment checklist that several people can update.

**Access note:** the shared link grants access. Anyone who obtains it may be able to view or edit the list, so do not put sensitive information in a shared list.

## Installation

```bash
git clone https://github.com/JirA44/share-list
cd share-list
npm install
npm run dev
```

Ouvre `http://localhost:3000` → “Créer une liste” → copie le lien.

## Utilisation

### Interface
1. Clique “Créer une liste + lien partage”
2. Ajoute des tâches (Entrée)
3. Coche / supprime — tout le monde voit en temps réel (refresh)

### API (pour bots / automatisation)
```bash
# Créer
curl -X POST http://localhost:3000/api/lists
# → {"id":"aB3x9K2p","url":"/l/aB3x9K2p"}

# Lister
curl http://localhost:3000/api/lists/aB3x9K2p

# Ajouter
curl -X POST http://localhost:3000/api/lists/aB3x9K2p/items -H "Content-Type: application/json" -d '{"text":"Acheter pain"}'

# Cocher
curl -X PATCH http://localhost:3000/api/items/<itemId> -d '{"done":true}'

# Supprimer
curl -X DELETE http://localhost:3000/api/items/<itemId>
```

## À quoi ça sert vs alternatives ?

| Alternative | Quand choisir share-list |
|---|---|
| Google Keep / Trello | Quand tu **ne veux pas** créer de compte ni choisir un workspace |
| WhatsApp liste | Quand tu veux une vraie checklist cochable, pas un message qui se perd |

## Limites assumées
Pas d'historique, pas de droits fins — volontairement minimal. Fork pour ajouter auth si besoin.

MIT — PRs bienvenues.
