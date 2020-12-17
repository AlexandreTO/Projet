<?php

//src/Controller/ProductsController.php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ObjectRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Entity\Products;

class ProductsController extends AbstractController
{
	public function display_products()
	{
		$products = $this->getDoctrine()
						 ->getManager()
						 ->getRepository(Products::class)->products();
		
		return $this->render("products.html.twig", ['products' => $products,]);
	}
}