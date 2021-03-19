# Projet e-commerce

![PHP 7.4](https://img.shields.io/badge/PHP-7.4-orange?style=for-the-badge&logo=appveyor)

## Objectif

Créer un site e-commerce sans utiliser un CMS. On utilisera **Symfony** et **React.js**.

Le site doit être sécurisé et doit avoir un back office afin de gérer :

- les dernières commandes
- l'état des commandes
- le chiffre d'affaire
- Et plus d'options

Les informations concernant la base de données sont disponibles sur le fichier [site.md](https://github.com/AlexandreTO/Projet/blob/master/site.md).

La deadline est **le 17 septembre 2021**

## Symfony

Pour pouvoir utiliser les commandes, il faudra installer Composer <https://getcomposer.org/download/> et installer Symfony via <https://symfony.com/download>

Il faut ensuite mettre à jour composer avec la commande :

```bash
composer update
```

Pour lancer Symfony, mettez-vous dans le dossier du repo, ouvrez un terminal depuis ce dossier et lancez la commande :

```bash
symfony server:start
```

Pour utiliser les fixtures, il faut l'installer via la commande :

```bash
 composer require --dev orm-fixtures
```

Ensuite pour installer Faker, on entre cette commande :

```bash
composer require fakerphp/faker
```

Pour éviter de commit les identifiants et le nom de la base de données dans le fichier .env, il faut créer un nouveau fichier qui s'appellera **.env.local** qui contient le même contenu que .env. Il faudra ensuite remplacé les identifiants, mots de passe et le nom de la base de données dans **.env.local** et non dans .env. Cela permet de protéger notre base de données.

## TODO

- Intégration de React dans le projet (chercher sur google comment faire)
- Utilisation d'un serveur dédié pour la base de données
- Faire les liaisons entre les tables
- Crypter les mots de passes
