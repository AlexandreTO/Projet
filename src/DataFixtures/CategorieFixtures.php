<?php

namespace App\DataFixtures;

use App\Entity\Categories;
use Faker\Factory;
use Faker\Generator;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class CategorieFixtures extends Fixture
{
    private ?Generator $fakerGenerator = null;
    public const NB_CATEGORIES = 5;

    public function load(ObjectManager $manager)
    {
        $this->fakerGenerator = Factory::create('fr_FR');
        $this->loadCategorie($manager);
        $manager->flush();
    }

    private function loadCategorie(ObjectManager $manager)
    {
        for ($i = 0; $i <= self::NB_CATEGORIES; $i++) {

            $categorie = new Categories();
            $categorie->setTitle($this->fakerGenerator->word);
            $categorie->setDescription($this->fakerGenerator->text($maxNbChar = 200));
            $categorie->setStatus($this->fakerGenerator->boolean);
            $categorie->setNameImage($this->fakerGenerator->imageUrl($width = 640, $height = 480));
            // On ajoute une référence qu'on pourra réutiliser plus tard pour gérer les clés étrangères
            $this->setReference('categorie_' . $i, $categorie);

            $manager->persist($categorie);
        }
    }
}
