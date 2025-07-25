# Sol Ligam - Site Web Officiel

Site web officiel de Sol Ligam, société d'accompagnement pour la réduction de l'impact carbone.

## À propos de Sol Ligam

Sol Ligam accompagne les structures pour diminuer leur impact carbone, notamment dans l'événementiel. 
Nous avons développé un simulateur gratuit avec des données fiables, accessible sur [monbilancarbone.solligam.fr](https://monbilancarbone.solligam.fr).

## Technologies

- Jekyll pour la génération statique
- GitHub Pages pour l'hébergement
- Design éco-conçu et responsive

## Structure du site

- **Page d'accueil** : Présentation de Sol Ligam avec interface professionnelle
- **Nos projets** : Présentation des projets d'accompagnement (mise à jour via collection Jekyll)
- **Outils** : Simulateur gratuit + outils avancés pour clients
- **Mentions légales** : Informations légales obligatoires

## Développement local

```bash
# Installation des dépendances Jekyll
bundle install

# Lancement du serveur de développement
bundle exec jekyll serve

# Le site sera accessible sur http://localhost:4000
```

## Architecture Jekyll

```
├── _config.yml           # Configuration Jekyll
├── _layouts/             # Templates de pages
├── _includes/            # Composants réutilisables
├── _sass/                # Feuilles de style SCSS
├── _projects/            # Collection des projets
├── assets/               # Ressources CSS/JS
├── images/               # Images et logos
└── archive/              # Ancienne version du site
```

## Éco-conception

Le site est conçu avec des principes d'éco-design :
- Utilisation de fonts système (pas de web fonts)
- CSS optimisé et minimaliste
- Images en format WebP
- JavaScript minimal
- Génération statique pour des performances optimales

## Déploiement

Le site est automatiquement déployé sur GitHub Pages à chaque push sur la branche principale.

## Contact

contact@solligam.fr

---
© 2025 SAS Sol Ligam - Tous droits réservés.
