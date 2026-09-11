# Site de Max Fréjus O. SANYA

Site académique construit avec Vite, React, TypeScript et Tailwind CSS.

## Développement local

Prérequis : Node.js récent et pnpm.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

L’application est ensuite disponible sur l’URL indiquée par Vite, généralement
`http://localhost:5173`.

Avant chaque mise en ligne :

```bash
pnpm lint
pnpm build
```

Le dossier `dist/` est le résultat à publier. Il est généré par le build et ne
doit pas être modifié manuellement.

## Déploiement

### Vercel

1. Importer le dépôt dans Vercel.
2. Choisir `Vite` si Vercel demande le framework.
3. Utiliser `pnpm install --frozen-lockfile` comme commande d’installation.
4. Utiliser `pnpm build` comme commande de build.
5. Utiliser `dist` comme dossier de sortie.
6. Ajouter le domaine définitif dans les réglages du projet.

Vercel gère les routes de cette SPA Vite. Après le déploiement, tester
directement `/a-propos`, `/publications` et `/ressources`, pas seulement `/`.

### Netlify

1. Connecter le dépôt à Netlify.
2. Commande de build : `pnpm build`.
3. Dossier de publication : `dist`.
4. Ajouter une règle de réécriture `/* /index.html 200` si l’hébergeur ne
   renvoie pas automatiquement les routes React vers `index.html`.

### Hébergement statique générique

```bash
pnpm install --frozen-lockfile
pnpm lint
pnpm build
```

Publier le contenu de `dist/` sur le serveur web. Le serveur doit servir
`index.html` pour toute route inconnue afin que React Router puisse afficher la
bonne page après un rechargement direct.

## Contenu et SEO

Les données éditoriales sont centralisées dans `src/data/`. La photo du profil
et les logos partenaires utilisent des chemins locaux dans `public/images/`.
Les métadonnées SEO globales sont dans `index.html`. Avant la production,
remplacer les URLs relatives des cartes sociales par l’URL publique définitive
si un outil de partage ou de prévisualisation l’exige.

Les informations d’hébergeur et de collecte de données restent à valider avec
Dr SANYA dans la page `/mentions-legales`.
