<?php

namespace App\DataFixtures;

use App\Entity\User;
use Faker\Factory;
use Faker\Generator;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class UserFixtures extends Fixture
{
    private ?Generator $fakerGenerator = null;
    public const NB_USERS = 5;

    public function load(ObjectManager $manager)
    {
        $this->fakerGenerator = Factory::create('fr_FR');
        $this->loadUser($manager);
        $manager->flush();
    }

    private function loadUser(ObjectManager $manager)
    {
        for ($i = 0; $i < self::NB_USERS; $i++) {
            $user = new User();
            $user->setLastName($this->fakerGenerator->lastName());
            $user->setName($this->fakerGenerator->name());
            $user->setPwd($this->fakerGenerator->md5());
            $user->setEmail($this->fakerGenerator->email);
            $user->setPhone($this->fakerGenerator->phoneNumber);
            $user->setRoles($this->fakerGenerator->jobTitle);

            $manager->persist($user);
        }
    }
}
