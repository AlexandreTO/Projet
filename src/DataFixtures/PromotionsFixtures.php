<?php

namespace App\DataFixtures;

use App\Entity\Promotions;
use Faker\Factory;
use Faker\Generator;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class PromotionsFixtures extends Fixture
{
    private ?Generator $fakerGenerator = null;
    public const NB_PROMOTIONS = 5;

    public function load(ObjectManager $manager)
    {
        $this->fakerGenerator = Factory::create('fr_FR');
        $this->loadPromotions($manager);
        $manager->flush();
    }

    private function loadPromotions(ObjectManager $manager)
    {
        for ($i = 0; $i <= self::NB_PROMOTIONS; $i++) {
            $promotions = new Promotions();
            $promotions->setCode($this->fakerGenerator->randomDigitNotNull);
            $promotions->setMontant($this->fakerGenerator->randomDigitNotNull);
            $this->addReference('promotion_' . $i, $promotions);

            $manager->persist($promotions);
        }
    }
}
