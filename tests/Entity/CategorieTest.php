<?php

namespace App\Tests\Entity;

use App\Entity\Categories;
use PHPUnit\Framework\TestCase;

class CategorieTest extends TestCase
{
    public function testCategories()
    {
        $categories = new Categories();
        $title = "Cookies";
        $status = 0;

        $categories->setTitle($title);
        $categories->setStatus($status);

        $this->assertEquals("Cookies", $categories->getTitle());
        $this->assertFalse($categories->getStatus());
    }
}