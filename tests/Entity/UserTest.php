<?php

namespace App\Tests\Entity;

use App\Entity\User;
use PHPUnit\Framework\TestCase;

class UserTest extends TestCase
{
    public function testUser()
    {
        $user = new User();
        $nom = "TO";
        $prenom = "Alexanre";

        $user->setNom($nom);
        $user->setPrenom($prenom);
        $this->assertEquals("TO", $user->getNom());
        $this->assertEquals("ALexandre", $user->getPrenom());
    }
}