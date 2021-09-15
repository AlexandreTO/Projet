<?php

//src/Controller/ProductsController.php

namespace App\Controller;

use App\Entity\Products;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Repository\ProductsRepository;

class ProductsController extends AbstractController
{
	/** @Route("/products/{id}", name="view_product") */
	public function viewProduct(Products $product): Response
	{
		return $this->render('products/viewProduct.html.twig', [
			'product' => $product,
		]);
	}
}
