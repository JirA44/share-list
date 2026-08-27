# share-list — Présentation

**One-liner:** Todo à partager par lien magique, sans compte ni inscription.

## À quoi ça sert ?
- **Courses / coloc** → tu crées une liste, copies le lien `https://.../l/aB3x9K2p`, envoies sur WhatsApp. Chacun coche en live.
- **Planning projet léger** → remplace Trello quand 1 liste suffit (ex: checklist déploiement).
- **Event** → liste invités / matériel partagée avec 10 bénévoles sans créer 10 comptes.

## Exemples
1. Créer: `POST /api/lists` → `{id:"aB3x9K2p", url:"/l/aB3x9K2p"}`
2. Ajouter: `POST /api/lists/:id/items {text:"Acheter pain"}`
3. Cocher: `PATCH /api/items/:id {done:true}`
4. Ouvrir: `https://ton-domaine/l/aB3x9K2p` (tout le monde voit la même liste en temps réel via refresh)

## Pourquoi sans compte ?
0 friction = adoption instantanée. La clé **est** l'URL (comme un Google Doc "toute personne disposant du lien").

## Limites assumées (public)
Pas d'historique, pas de droits fins — volontairement minimal. Fork pour ajouter auth si besoin.
