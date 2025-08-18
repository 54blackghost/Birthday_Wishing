# HBD Vegas - Site d'Anniversaire pour Lontchi

Un site web d'anniversaire personnalisé créé avec React, TypeScript et Tailwind CSS, reproduisant fidèlement le design du site original https://hbd.rainago.com/.

## 🎉 Fonctionnalités

- **Design Vegas Moderne** : Interface élégante avec animations et effets visuels
- **Responsive Design** : Optimisé pour tous les appareils (mobile, tablette, desktop)
- **Animations Fluides** : Transitions et effets d'apparition au scroll
- **Messages Interactifs** : Système de vœux d'anniversaire avec formulaire
- **Galerie de Souvenirs** : Section dédiée aux moments précieux
- **Navigation Fluide** : Menu responsive avec ancres de navigation

## 🛠️ Technologies Utilisées

- **React 18** avec TypeScript
- **Tailwind CSS** pour le styling
- **Lucide React** pour les icônes
- **Vite** comme bundler et serveur de développement

## 📁 Structure du Projet

```
src/
├── components/
│   ├── Header.tsx          # Navigation principale
│   ├── Hero.tsx           # Section d'accueil avec effet Vegas
│   ├── About.tsx          # Section à propos de Lontchi
│   ├── Memories.tsx       # Galerie de souvenirs
│   ├── Wishes.tsx         # Messages d'anniversaire
│   └── Footer.tsx         # Pied de page avec contact
├── data/
│   └── website_design_json.json  # Données de configuration du site
├── App.tsx                # Composant principal
├── main.tsx              # Point d'entrée
└── index.css             # Styles globaux et animations
```

## 🎨 Design et Thème

Le site utilise une palette de couleurs inspirée du thème Vegas :

- **Couleurs Principales** : Noir (#000000) et Blanc (#ffffff)
- **Couleur d'Accent** : Rouge (#ff6b6b)
- **Typographie** : Arial avec différents poids (300, 400, 600, 700)
- **Animations** : Effets de pulsation, transitions fluides, apparitions au scroll

## 🚀 Installation et Démarrage

1. **Cloner le projet** (si applicable)
2. **Installer les dépendances** :
   ```bash
   npm install
   ```
3. **Lancer le serveur de développement** :
   ```bash
   npm run dev
   ```
4. **Ouvrir le navigateur** à l'adresse indiquée (généralement http://localhost:5173)

## 📱 Sections du Site

### 1. **Hero Section**
- Titre animé "JOYEUX ANNIVERSAIRE LONTCHI !"
- Effet d'étoiles animées en arrière-plan
- Boutons d'action avec effets de survol
- Design Vegas avec dégradé noir vers rouge

### 2. **À Propos**
- Présentation de Lontchi avec avatar
- Cartes informatives avec icônes
- Citations inspirantes
- Animations d'apparition au scroll

### 3. **Galerie de Souvenirs**
- Grille de cartes thématiques
- Galerie photo simulée
- Effets de survol et animations
- Message inspirant

### 4. **Messages d'Anniversaire**
- Formulaire interactif pour laisser des vœux
- Liste des messages reçus
- Statistiques en temps réel
- Interface utilisateur intuitive

### 5. **Footer**
- Informations de contact
- Liens de navigation
- Message final inspirant
- Design cohérent avec le thème

## 🎯 Fonctionnalités Interactives

- **Navigation Smooth** : Défilement fluide entre les sections
- **Menu Responsive** : Menu hamburger sur mobile
- **Formulaire de Messages** : Ajout de nouveaux vœux en temps réel
- **Animations au Scroll** : Éléments qui apparaissent progressivement
- **Effets de Survol** : Interactions visuelles sur les boutons et cartes

## 🔧 Personnalisation

Le site peut être facilement personnalisé en modifiant :

- **Contenu** : Textes et messages dans les composants
- **Couleurs** : Palette dans `tailwind.config.js` et `index.css`
- **Animations** : Durées et effets dans les classes CSS
- **Images** : Remplacement des placeholders par de vraies photos

## 📦 Build et Déploiement

Pour créer une version de production :

```bash
npm run build
```

Les fichiers optimisés seront générés dans le dossier `dist/`.

## 🎨 Choix Techniques

- **Composants Modulaires** : Architecture React avec séparation des responsabilités
- **TypeScript** : Typage fort pour une meilleure maintenabilité
- **Tailwind CSS** : Utility-first CSS pour un développement rapide
- **Animations CSS** : Effets visuels performants sans librairies externes
- **Responsive Design** : Mobile-first avec breakpoints adaptés

## 🌟 Points Forts

- **Performance** : Code optimisé et bundle léger
- **Accessibilité** : Navigation au clavier et contrastes respectés
- **SEO-Friendly** : Structure HTML sémantique
- **Maintenabilité** : Code modulaire et bien documenté
- **Expérience Utilisateur** : Interface intuitive et engageante

---

**Créé avec ❤️ pour célébrer l'anniversaire de Lontchi !** 🎂✨