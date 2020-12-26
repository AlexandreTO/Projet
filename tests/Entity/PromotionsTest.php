<?php

namespace App\Tests\Entity;

use App\Entity\Promotions;
use PHPUnit\Framework\TestCase;

class PromotionsTest extends TestCase
{

    public function testPromotions()
    {
        $promotions = new Promotions();
        $code = "RET23";
        $montant = 100;

        $promotions->setCode($code);
        $promotions->setMontant($montant);

        $this->assertEquals("RET23", $promotions->getCode());
        $this->assertEquals(100, $promotions->getMontant());
    }
}