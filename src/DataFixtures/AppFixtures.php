<?php

namespace App\DataFixtures;

use App\Entity\User;
use Faker\Factory;
use Faker\Generator;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    private ?Generator $fakerGenerator = null;

    public function load(ObjectManager $manager)
    {
        $this->fakerGenerator = Factory::create('fr_FR');
        $this->loadUser($manager);

        $manager->flush();
    }

    public function loadUser(ObjectManager $manager)
    {
        for ($i = 0; $i < 5; $i++) {
            $user = new User();
            $user->setNom($this->fakerGenerator->lastName());
            $user->setPrenom($this->fakerGenerator->name());
            $user->setPwd($this->fakerGenerator->md5());
            $user->setEmail($this->fakerGenerator->email);
            $user->setPhone($this->fakerGenerator->phoneNumber);
            $user->setRoles($this->fakerGenerator->jobTitle);

            $manager->persist($user);
        }
    }
}
