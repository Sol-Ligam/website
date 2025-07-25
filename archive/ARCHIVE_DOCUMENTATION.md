# Archive Documentation - Sol Ligam Website

Ce dossier contient l'ancienne version du site web de Sol Ligam avant la refonte générale.

## Structure de l'ancien site

### Pages principales

#### `index.html`
- **But** : Page d'accueil temporaire "En cours de construction"
- **Contenu** : Logo Sol Ligam, message de construction, lien de contact
- **Fonctionnalités** : Animation de particules en arrière-plan, design responsive
- **URL preserve** : `/` (page d'accueil principale)

#### `mentions-legales.html`
- **But** : Page des mentions légales obligatoires
- **Contenu** : Informations légales de la SAS Sol Ligam, crédits, conditions d'utilisation
- **URL preserve** : `/mentions-legales`
- **Note** : Contenu à migrer vers la nouvelle version avec mise à jour des informations si nécessaire

### Ressources

#### `css/styles.css`
- **But** : Feuille de style principale
- **Contenu** : Variables CSS, styles pour les boutons, conteneurs, animations
- **Couleurs utilisées** : Thème sombre avec fond noir, textes blancs, boutons gris
- **À récupérer** : Variables de couleur, styles de boutons

#### `css/styles-mobile.css`
- **But** : Styles responsive pour mobiles (fichier non présent dans l'archive actuelle)

#### `js/particles-init.js`
- **But** : Configuration de l'animation de particules
- **Bibliothèque** : particles.js depuis CDN
- **Note** : Animation à conserver ou remplacer par une alternative plus éco-conçue

#### `js/footerYear.js`
- **But** : Mise à jour automatique de l'année dans le footer
- **Fonctionnalité** : JavaScript simple pour afficher l'année courante

#### `images/brand/`
- **But** : Ressources graphiques de la marque
- **Contenu** :
  - `logo.png` / `logo.webp` : Logo principal
  - `logo_avec_fond.png` / `logo_avec_fond.webp` : Logo avec fond
- **Note** : Logo à réutiliser dans la nouvelle version, analyser les couleurs pour le thème

#### `images/favicon.ico`
- **But** : Icône du site dans les onglets navigateur
- **Note** : À conserver

## Migration vers la nouvelle architecture

### URLs à préserver
- `/` → Nouvelle page d'accueil
- `/mentions-legales` → Page mentions légales migrée
- Prévoir redirections si nécessaire

### Éléments à réutiliser
1. **Logo et identité visuelle** : Couleurs à extraire du logo pour le nouveau thème
2. **Contenu des mentions légales** : À migrer et mettre à jour
3. **Structure responsive** : Principes de design responsive à conserver
4. **Footer avec année dynamique** : Fonctionnalité à maintenir

### Améliorations prévues
1. **Système de génération** : Migration vers Jekyll
2. **Navigation** : Ajout d'une navbar complète
3. **Nouvelles pages** : "Nos précédents projets", "Outils"
4. **Interface professionnelle** : Design plus élaboré avec les couleurs du logo
5. **Éco-conception** : Optimisation des performances et du poids des pages

## Notes importantes
- L'ancien site était hébergé sur GitHub Pages
- Le domaine et la configuration DNS doivent être préservés
- Les workflows GitHub Actions existants peuvent être conservés
- L'ancien site utilisait des fonts Google (Roboto) - à évaluer pour l'éco-conception