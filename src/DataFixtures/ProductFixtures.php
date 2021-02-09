<?php

namespace App\DataFixtures;

use App\Entity\Products;
use App\Entity\Categories;
use App\Entity\Promotions;
use App\DataFixtures\CategorieFixtures;
use App\DataFixtures\PromotionsFixtures;
use Faker\Factory;
use Faker\Generator;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class ProductFixtures extends Fixture implements DependentFixtureInterface
{
    private ?Generator $fakerGenerator = null;
    private const NB_PRODUCTS = 5;

    public function load(ObjectManager $manager)
    {
        $this->fakerGenerator = Factory::create('fr_FR');
        $this->loadProducts($manager);

        $manager->flush();
    }

    private function loadProducts(ObjectManager $manager)
    {
        for ($i = 0; $i <= self::NB_PRODUCTS; $i++) {
            try {
                $refNum = random_int(1, CategorieFixtures::NB_CATEGORIES) ?? 0;
            } catch (\Throwable $th) {
                $refNum = 1;
            }

            try {
                $refNum1 = random_int(1, PromotionsFixtures::NB_PROMOTIONS) ?? 0;
            } catch (\Throwable $th) {
                $refNum1 = 1;
            }

            // On fait référaence à la table catégorie
            /** @var Categories $categorie */
            $categorie = $this->getReference('categorie_' . $refNum);

            /** @var Promotions $promotions */
            $promotions = $this->getReference('promotion_' . $refNum1);

            $product = new Products();
            $product->setName($this->fakerGenerator->word);
            $product->setDescription($this->fakerGenerator->text($maxNbChars = 200));
            $product->setPrix($this->fakerGenerator->randomDigitNotNull);
            $product->setImage($this->fakerGenerator->imageUrl($width = 640, $height = 480));
            $product->setPromo($this->fakerGenerator->boolean);
            $product->setStatus($this->fakerGenerator->boolean);
            $product->setQuantite($this->fakerGenerator->randomDigitNotNull);
            $product->setCategorie($categorie);
            $product->setSlug($this->fakerGenerator->slug);
            $product->setCodePromo($promotions);

            $manager->persist($product);
        }
    }

    public function getDependencies()
    {
        return array(CategorieFixtures::class, PromotionsFixtures::class);
    }
}
