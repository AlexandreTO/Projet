<?php

namespace App\Tests\Entity;

use App\Entity\User;
use PHPUnit\Framework\TestCase;

class UserTest extends TestCase
{

    // Unit Testing pour l'entité User
    public function testUser()
    {
        $user = new User();
        $name = "TO";
        $prenom = "Alexandre";
        $email = "test@gmail.com";
        $role = "admin";

        $user->setLastName($name);
        $user->setName($prenom);
        $user->setEmail($email);
        $user->setRoles($role);

        $this->assertEquals("TO", $user->getLastName());
        $this->assertEquals("Alexandre", $user->getName());
        $this->assertEquals("test@gmail.com", $user->getEmail());
        $this->assertEquals('admin', $user->getRoles());
    }
}
