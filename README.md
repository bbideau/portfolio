# Portfolio — Benjamin Bideau

Portfolio React/Vite simplifié : navigation en haut, présentation courte, grille de projets, compétences et parcours. Police système, bordures légères, fonds discrets et survols sobres. Pas de réglage d’animation dans la navigation. Les projets peuvent être modifiés dans src/data/projectsData.js.

## Démarrer

```sh
npm ci
npm run dev
```

## Compiler

```sh
npm run build
npm run preview
```

Pour GitHub Pages sous `/portfolio/` : `VITE_BASE_PATH=/portfolio/ npm run build`.
La configuration par défaut utilise la racine `/`.

## Personnaliser

- Projets, textes, galeries et démonstration : `src/data/projectsData.js`.
- Images : `public/assets/`.
- Présentation : `src/components/Hero.jsx` et `About.jsx`.
- Compétences : `src/components/Skills.jsx`.
- Expériences : `src/components/StageTBMCore.jsx` (nom du fichier d’origine conservé).
- Contact : `src/components/Contact.jsx`.
- Design responsive et thèmes : `src/portfolio.css`.
- Pages détaillées historiques : `public/projects/`.

## Contenu

Le profil, la formation, les compétences et les expériences reprennent le CV fourni. Les projets de référence sont conservés à la demande de Benjamin, sauf Bot Discord–Vinted et Visualisation de données, remplacés par Concordia. La démo externe Pixel War est celle du site de référence. Aucun lien de réseau social n’a été inventé. L’adresse postale et le numéro personnel du CV ne sont pas affichés. Les mentions d’hébergement sont à compléter avant publication publique.

## Vérification

Compilation de production réussie. Navigation par ancres, filtres, modales avec galeries, piège de focus, fermeture Échap, menu mobile et bascule de thème sont conservés. Le thème est mémorisé, les transitions respectent la préférence de mouvement réduit. Contrôle visuel et essais multi-navigateurs restant à effectuer : service d’aperçu indisponible pendant cette session.

Le projet de référence est https://github.com/itamifx/portfolio .

## Petites interactions

Recherche de projets par nom, description ou technologie (insensible aux accents), combinée aux catégories. Message si aucun résultat et bouton de réinitialisation. Navigation avec section active, fermeture du menu par Échap, copie de l’adresse e-mail avec confirmation ou message d’erreur et retour en haut après défilement.

## Dernières améliorations

Réinitialisation des filtres et recherche mémorisée pour la session du navigateur. Le tri alphabétique a été retiré. Barre de progression de lecture. Les galeries se parcourent avec les flèches gauche/droite et les points de sélection. Aucun contenu de projet modifié.

Icône lune/soleil pour le thème, flèches dans les galeries. Survol des compétences : léger éclairage suivant le pointeur, activation des étiquettes au survol et au clavier. Les effets de mouvement sont désactivés avec la préférence système de mouvement réduit.

## Projet Concordia

Ajout à partir du bilan de projet et de la capture fournis : Python, Pygame, Oracle ORDB, architecture MVC et équipe de huit. Le texte distingue la version jouable des actions, IA et tests encore partiels. Aucun rôle individuel non confirmé n’est attribué. Bot Vinted et Visualisation de données retirés du catalogue et des pages historiques.
