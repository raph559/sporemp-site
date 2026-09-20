# SporeMP — site de présentation

Site public : https://raph559.github.io/sporemp-site/

Site statique bilingue, anglais par défaut et français via le sélecteur EN / FR. Sans dépendance npm, compte visiteur ou traceur. Ce dépôt contient uniquement le site et son illustration originale, aucun fichier du jeu ni donnée privée de développement.

## Publier une actualité ou une mise à jour

Modifier `content.en.json` (anglais) et `content.json` (français) directement sur GitHub, puis enregistrer les deux traductions sur `main`. Les actualités doivent avoir les mêmes slugs dans les deux langues. GitHub Actions reconstruit le site et le publie sur GitHub Pages. Les textes d’interface sont dans `i18n.mjs`.

- `news` : ajouter un objet avec un `slug` unique (lettres minuscules et tirets), une date ISO `AAAA-MM-JJ`, une catégorie, un titre, un résumé et des paragraphes. Les articles sont triés du plus récent au plus ancien.
- `releases` : ajouter les versions en tête de liste, avec leurs changements et leurs limites.
- `roadmap` : modifier les objectifs et leur statut, sans présenter les travaux prévus comme déjà disponibles.
- `leetchiUrl` dans `content.json` : remplacer `null` par l’URL HTTPS exacte de la cagnotte. Ce destinataire est partagé entre les deux langues. Le bouton de don apparaît automatiquement. Tant que l’URL manque, le site annonce simplement que la cagnotte sera ajoutée.

Le contenu initial est un bilan du développement au 15 septembre 2026. Les versions du launcher présentées sont des versions de développement. Aucun téléchargement public n’est annoncé.

## Développement local

Avec Node.js 22 ou plus récent :

```sh
node build.mjs
node check.mjs
python -m http.server 4173 --directory dist
```

Ouvrir http://localhost:4173. `build.mjs` échappe les textes, génère les pages HTML, les métadonnées et le sitemap dans `dist/`. Les actualités sont lisibles sans JavaScript. `check.mjs` vérifie les fichiers, les références locales et les ancres.

## Illustration

`assets/universe.png` est l’illustration originale du launcher SporeMP, créée avec Image Gen le 8 septembre 2026. Elle n’est ni une capture de gameplay ni un asset extrait de SPORE. SHA-256 : `5397f78275521e8bb8f7f4344c79e58bf6d16cdb36b0a1f66a3c5de6e625b184`.

SporeMP est un projet communautaire indépendant, non affilié à Electronic Arts ou Maxis. SPORE appartient à ses ayants droit.
