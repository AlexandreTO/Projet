# Projet e-commerce

![PHP 8.0](https://img.shields.io/badge/PHP-8.0-blue)
![Symfony](https://img.shields.io/badge/Symfony-5.0-brightgreen)
=======

Le projet tourne sous **PHP 8.0**. Si possible mettez à jour votre version de PHP. 

(Linux et Mac ont normalement cette mise à jour de disponible.)

## Objectif

Créer un site e-commerce sans utiliser un CMS. On utilisera **Symfony** et **React.js**.

Le site doit être sécurisé et doit avoir un back office afin de gérer :

- les dernières commandes
- l'état des commandes
- le chiffre d'affaire
- Et plus d'options

Les informations concernant la base de données sont disponibles sur le fichier [site.md](https://github.com/AlexandreTO/Projet/blob/master/site.md).

La deadline est **le 17 septembre 2021**

### Symfony

Pour pouvoir utiliser les commandes, il faudra installer Composer <https://getcomposer.org/download/> et installer Symfony via <https://symfony.com/download>

Pour lancer Symfony, mettez-vous dans le dossier du repo, ouvrez un terminal depuis ce dossier et lancez les commandes (**la commande update ne doit être lancée que si seulement il y a eu des changements dans le `composer.json`**) :

```bash
composer update php --with-all-dependencies
symfony server:start
```

Pour utiliser les fixtures, il faut lancer cette commande:

```bash
php bin/console doctrine:fixtures:load
```

A chaque fois qu'il y a des modifications à faire sur la base de données (c'est-à-dire une modification dans les entités), il faudra génerer la migration avec la commande : 

```bash
php bin/console doctrine:migrations:diff
```
Et l'intégrer dans la base de données avec :

```bash
php bin/console doctrine:migrations:execute 'DoctrineMigrations\VersionDeLaMigration'
```

Pour éviter de commit les identifiants et le nom de la base de données dans le fichier .env, il faut créer un nouveau fichier qui s'appellera `.env.local` qui contient le même contenu que .env. Il faudra ensuite remplacé les identifiants, mots de passe et le nom de la base de données dans `.env.local` et non dans .env. Cela permet de protéger notre base de données.

> En attendant un serveur dédié pour avoir une base de données commune au groupe, on utilisera nos base des données **en locale**.

Pour le `.env.local`, copiez cette ligne et remplacer `db_user`, `db_password` et `nom_bdd` par les informations de votre base de données.

`
DATABASE_URL=mysql://db_user:db_password@127.0.0.1:3306/nom_bdd?serverVersion=5.7
`

#### TODO

- Utilisation d'un serveur dédié pour la base de données
- Finir l'implémentation de Stripe pour le système de paiement
- Intégration du webpack pour le React.js
- Affiner les tests pour le CI/CD
