<?php

namespace App\DataFixtures;

use App\Entity\User;
use Faker\Factory;
use Faker\Generator;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserFixtures extends Fixture
{
    private ?Generator $fakerGenerator = null;
    public const NB_USERS = 5;
    private $encoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }

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
            $user->setUsername($this->fakerGenerator->userName);
            $user->setName($this->fakerGenerator->name());
            $user->setPassword($this->passwordEncoder->encodePassword(
                $user,
                $this->fakerGenerator->word()
            ));
            $user->setEmail($this->fakerGenerator->email);
            $user->setPhone($this->fakerGenerator->phoneNumber);
            $user->setRoles($this->fakerGenerator->words());
            $user->setAddress($this->fakerGenerator->address);
            $user->setCity($this->fakerGenerator->city());
            $user->setZipcode($this->fakerGenerator->numerify('#####'));

            $manager->persist($user);
        }
    }
}
