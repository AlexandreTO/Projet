<?php

namespace App\Tests\Entity;

use App\Entity\Products;
use PHPUnit\Framework\TestCase;

class ProductsTest extends TestCase{

    public function testProducts()
    {
        $products = new Products;
        $name = "MSI";
        $prix = 23;
        $status = 0;

        $products->setName($name);
        $products->setPrix($prix);
        $products->setStatus($status);

        $this->assertEquals("MSI", $products->getName());
        $this->assertEquals(23, $products->getPrix());
        $this->assertFalse($products->getStatus());
    }
}