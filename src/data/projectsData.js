import imgConcordia from '/assets/concordia.png'
import imgVm from '/assets/vm.png'
import imgGraphes from '/assets/graphes.png'
import imgGraphes2 from '/assets/graphes2.png'
import imgGraphes3 from '/assets/graphes3.png'
import imgIHM from '/assets/IHM.png'
import imgLowatem from '/assets/lowatem-gui.png'
import imgTresor from '/assets/tresor.png'
import imgLaby from '/assets/labyri3.png'
import imgLaby2 from '/assets/labyri2.png'
import rl1 from '/assets/robotLeague1.png'
import rl2 from '/assets/robotLeague2.png'
import rl3 from '/assets/robotLeague3.png'

export const projectsData = [
  {
    id: 'interface-graphique',
    title: 'Interface graphique de jeu',
    desc: 'Prototype d’interface pour un jeu de plateau : menus, animations et écrans de jeu.',
    image: imgIHM,
    images: [{ src: imgIHM, alt: 'Interface graphique de jeu' }],
    description: [
      'Prototype d\'interface graphique pour un jeu de plateau numérique : menus, HUD, et écrans de niveaux.'
    ],
    skills: [
      'Langages : HTML/CSS/JS',
      'Rôle : Design d\'interface, animations, accessibilité',
      'Statut : Prototype'
    ],
    tech: 'HTML, CSS, JavaScript'
  },
  {
    id: 'jeu-plateau',
    title: 'Jeu de plateau',
    desc: 'Implémentation des niveaux d\'un jeu en Java',
    image: imgLowatem,
    images: [{ src: imgLowatem, alt: 'Lowatem' }],
    description: [
      'Développement d\'un jeu de plateau appelé <strong>Lowatem</strong> en Java. Le projet s\'est déroulé en deux phases : implémentation complète des règles du jeu.',
      'Lowatem est un jeu de plateau au tour par tour développé en Java/JavaFX dans lequel un joueur affronte une IA. Chaque unité (soldat, bateau, avion…) possède son propre coût, sa portée de déplacement, ses points de vie et ses types de terrains accessibles, ce qui amène une vraie dimension stratégique.',
      'Le joueur choisit ses actions en sélectionnant une unité et en la déplaçant sur une case valide, avec possibilité d\'attaquer si une cible est à portée. Toute action invalide (déplacement impossible, mauvaise unité, terrain interdit…) entraîne immédiatement la fin de la partie.',
      'Mon rôle sur ce projet était de calculer toutes les actions possibles pour le joueur, d\'implémenter les règles complètes du jeu et de réaliser des tests exhaustifs pour garantir le bon fonctionnement.'
    ],
    skills: [
      'Programmation orientée objet en Java',
      'Analyse et modélisation de règles de jeu',
      'Architecture logicielle (séparation des responsabilités, modularité)'
    ],
    tech: 'Java, Git, UML, IDE (NetBeans)'
  },
  {
    id: 'concordia',
    title: 'Concordia',
    desc: 'Adaptation numérique du jeu de société Concordia, développée en Python avec une interface Pygame.',
    image: imgConcordia,
    images: [{ src: imgConcordia, alt: 'Concordia : plateau de jeu, ressources et cartes des joueurs' }],
    description: [
      'Projet universitaire réalisé en <strong>équipe de huit</strong> en septembre 2026 : adapter le jeu de société <strong>Concordia</strong> en application Python avec une interface graphique.',
      'Le projet associe une architecture <strong>MVC</strong>, une interface <strong>Pygame</strong> et une base de données objet-relationnelle <strong>Oracle ORDB</strong>. Le travail a été organisé avec GitLab, des points quotidiens et une répartition des tâches.',
      'Le résultat est une <strong>version jouable</strong> avec une interface fonctionnelle. Certaines actions du jeu original restent à compléter ; les joueurs IA sont basiques et la couverture des tests est partielle.'
    ],
    objectives: [
      'Adapter les règles du jeu de société à une version numérique',
      'Séparer le modèle, la vue et le contrôleur avec une architecture MVC',
      'Concevoir une interface graphique et intégrer des joueurs IA',
      'Exploiter les données Oracle et organiser le développement en équipe'
    ],
    features: [
      'Plateau de jeu et interface graphique réalisés avec Pygame',
      'Affichage des cartes, des ressources et des informations des joueurs',
      'Version jouable avec une partie des actions du jeu original',
      'Joueurs IA basiques',
      'Modélisation UML et tests unitaires partiels'
    ],
    skills: [
      'Développement Python et structuration MVC',
      'Interface graphique avec Pygame',
      'Utilisation d’Oracle ORDB et du pilote Python oracledb',
      'Travail en équipe, gestion des tâches et versionnement GitLab'
    ],
    tech: 'Python, Pygame, Oracle ORDB, oracledb, Git, GitLab, UML'
  },
  {
    id: 'visualisation-graphes',
    title: 'Visualisation de graphes',
    desc: 'Application Java pour afficher et manipuler des graphes',
    image: imgGraphes,
    images: [
      { src: imgGraphes, alt: 'Visualisation de graphes 1' },
      { src: imgGraphes2, alt: 'Visualisation de graphes 2' },
      { src: imgGraphes3, alt: 'Visualisation de graphes 3' }
    ],
    description: [
      'Interface de visualisation de graphes'
    ],
    objectives: [
      'Comprendre le principe des algorithmes de disposition de graphes (forces d\'attraction/répulsion)',
      'Coder les fonctions essentielles à la manipulation de graphes'
    ],
    skills: [
      'Compréhension d\'algorithmes de visualisation de données',
      'Organisation et structuration d\'un projet orienté algorithmes'
    ],
    tech: 'Java, JavaFX, Git'
  },
  {
    id: 'installation-poste',
    title: 'Installation de poste',
    desc: 'Installation de poste virtuel léger en suivant un cahier des charges',
    image: imgVm,
    images: [{ src: imgVm, alt: 'Installation VM' }],
    description: [
      'Projet d\'<strong>installation et de configuration</strong> d\'un poste virtuel léger conforme à un cahier des charges : choix du système, installation des outils de développement, automatisation et documentation.'
    ],
    features: [
      'Choix et configuration du système (<strong>Linux Mint</strong>)',
      'Installation d\'outils : IDE, Git, outils réseau, etc.',
      'Rédaction d\'une documentation d\'installation claire'
    ],
    tech: 'Linux Mint, Bash, VMware, Git'
  },
  {
    id: 'pixel-war',
    title: 'Pixel War',
    desc: 'Jeu web de chasse au trésor en équipe.',
    image: imgTresor,
    images: [{ src: imgTresor, alt: 'Pixel War' }],
    description: [
      'Petit <strong>jeu web</strong> de guerre d\'équipe, chasse de pièces sur un plateau récupéré d\'une API.'
    ],
    skills: [
      'Manipulation du DOM en JavaScript',
      'Gestion d\'événements (clics, interactions utilisateur)',
      'Organisation d\'un petit projet front-end'
    ],
    tech: 'HTML, CSS, JavaScript',
    demoUrl: 'https://itamifx.github.io/chasseAuTresor/'
  },
  {
    id: 'labyrinthe',
    title: 'Labyrinthe',
    desc: 'Prototype d\'un labyrinthe interactif - génération & IA',
    image: imgLaby,
    images: [
      { src: imgLaby, alt: 'Labyrinthe aperçu 1' },
      { src: imgLaby2, alt: 'Labyrinthe aperçu 2' }
    ],
    description: [
      'Projet Java centré sur la création d\'un <strong>labyrinthe interactif multi-étages</strong>. L\'objectif était de développer progressivement un jeu complet : lecture des étages depuis des fichiers, affichage graphique avec JavaFX, gestion des déplacements du héros et intégration de monstres contrôlés par différentes logiques.',
      'Le projet m\'a permis d\'implémenter les règles du labyrinthe, gérer des <strong>tests unitaires</strong> et la gestion d\'erreurs.'
    ],
    features: [
      'Chargement et affichage des étages du labyrinthe (JavaFX)',
      'Déplacement du héros et gestion des salles accessibles',
      'Ajout de monstres (polymorphisme) et déplacements autonomes',
      'Tests unitaires',
      'Animations, déplacement fluide et système d\'éclairage autour du joueur',
      'Calculs de plus courts chemins (Algorithme de dijkstra)'
    ],
    tech: 'Java, JavaFX, JUnit, JGraphT, Git'
  },
  {
    id: 'robot-league',
    title: 'Robot League',
    desc: 'Plateforme de gestion de compétitions de football pour robots',
    image: rl3,
    images: [
      { src: rl1, alt: 'Robot League aperçu 1' },
      { src: rl2, alt: 'Robot League aperçu 2' },
      { src: rl3, alt: 'Robot League aperçu 3' }
    ],
    description: [
      'Robot League est une <strong>plateforme web</strong> qui gère toutes les étapes d\'une compétition de football pour robots : gestion sécurisée des <strong>utilisateurs</strong>, des <strong>équipes</strong> et des <strong>compétitions</strong>, avec une interface responsive.',
      'Le projet automatise aussi des tâches plus complexes comme la <strong>génération de créneaux</strong> et la <strong>planification des rencontres</strong>, afin de faciliter le travail des organisateurs.'
    ],
    features: [
      'Système sécurisé : gestion des utilisateurs, rôles et permissions',
      'Création / gestion des équipes et des compétitions',
      'Interface responsive avec Twig + TailwindCSS',
      'Automatisation : génération de créneaux et planification des matchs',
      'Gestion de données MySQL'
    ],
    tech: 'Symfony, PHP, MySQL, Twig, TailwindCSS, Git'
  }
]
