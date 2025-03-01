# Streaming Service API - Documentation Technique

Ce projet est une API RESTful pour une plateforme de streaming vidéo, conçue pour le marché saoudien. Il utilise Node.js, Express, Mongoose et MongoDB pour fournir une solution scalable et performante. Voici une synthèse des éléments clés du projet.

## Modèles (Models)

Les modèles définissent la structure des données stockées dans MongoDB. Chaque modèle correspond à une collection dans la base de données.

### User.js

Gère les utilisateurs de la plateforme.

Champs : username, email, password, preferences, createdAt.

### Video.js

Gère les vidéos disponibles sur la plateforme.

Champs : title, description, url, category, duration, createdAt.

### Category.js

Gère les catégories de vidéos (ex: Technologie, Kdrama, Crime).

Champs : name, description, createdAt.

### Subscription.js

Gère les abonnements des utilisateurs.

Champs : userId, plan, startDate, endDate.

### WatchHistory.js

Gère l'historique de visionnage des utilisateurs.

Champs : userId, videoId, watchedAt.

## Contrôleurs (Controllers)

Les contrôleurs contiennent la logique métier pour gérer les requêtes HTTP. Chaque contrôleur correspond à un modèle.

### Fonctions Clés

* Création : createUser, createVideo, createCategory, etc.
* Récupération : getUser, getVideo, getCategory, etc.
* Mise à jour : updateUser, updateVideo, updateCategory, etc.
* Suppression : deleteUser, deleteVideo, deleteCategory, etc.
* Listage : listUsers, listVideos, listCategories, etc.
* Nouvelle Fonction : createCategories
    * Permet de créer plusieurs catégories en une seule requête.
    * Utilise insertMany de Mongoose pour insérer un tableau de catégories.
    * Renvoie un tableau des catégories créées.

## Routes (Routes)

Les routes définissent les endpoints de l'API et associent les requêtes HTTP aux fonctions des contrôleurs.

### Exemple de Route pour les Catégories

* POST /categories : Créer une catégorie.
* POST /categories/bulk : Créer plusieurs catégories.
* GET /categories/:id : Récupérer une catégorie par ID.
* PUT /categories/:id : Mettre à jour une catégorie.
* DELETE /categories/:id : Supprimer une catégorie.
* GET /categories : Lister toutes les catégories.

## Configuration (Config)

### Connexion à MongoDB (config/db.js)

* Établit la connexion à la base de données MongoDB.
* Utilise Mongoose pour gérer la connexion et les erreurs.

## Fichier Principal (server.js)

### Objectif

* Configurer et démarrer le serveur Express.

### Fonctionnalités :

* Connexion à la base de données.
* Configuration des middlewares (ex: express.json() pour parser le JSON).
* Association des routes à l'API.
* Démarrage du serveur sur un port spécifié.

## Nouveautés Ajoutées

### createCategories

* Permet de créer plusieurs catégories en une seule requête.
* Utile pour initialiser la base de données ou importer des données en masse.

### getUserByEmail
* Permet de créer plusieurs catégories en une seule requête.
* Plus réaliste que la recherche par l'ID pour un administrateur.

### Script Postman pour les Requêtes en Masse

* Permet de tester la création de plusieurs enregistrements sans modifier l'API.
* Utilise un script Postman pour envoyer plusieurs requêtes POST en boucle.

## Conclusion

Ce projet propose une architecture permet une maintenance facile et une extensibilité pour ajouter de nouvelles fonctionnalités à l'avenir.
 Les modèles définissent la structure des données, les contrôleurs implémentent la logique métier, et les routes exposent les endpoints de l'API. L'ajout de fonctionnalités comme createCategories montre comment le projet peut évoluer pour répondre à des besoins spécifiques, comme l'import de données en masse.