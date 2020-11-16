# GameComponent

## Informations

L'entreprise vend des produits hi-tech comme des écrans, claviers etc...

## Fonctions à mettre en place

- Il faut mettre en place un serveur (ovh)
- Mettre en place des sous-domaines
- Base de données (voir ci-dessous)
- Utilisation de Stripe et MailGun

## Base de données

Les champs doivent être en **anglais**.

> - Products
> - Category
> - Users
> - Promotions

```markdown
Users : Nom, Prénom, mot de passe, email(unique), téléphone, rôle, date de création, (date de naissance)
Category : Titre, Description, statut (boolean), date de création, (date de modification), image(nom du fichier dans la BDD) - slug
Products : Nom, description, prix, image, promo, status, qte, Categories, slug, code_promo
Promotions = Code, date, montant, code_promo(Products), nom, prénom
```

## A faire après

```markdown
Commandes = id, récap, état de livraison, date de livraison
Transactions = Commandes.id, commande_validée(tableau)
```

Mise en place d'un système de panier qu'on va gérer avec les sessions
