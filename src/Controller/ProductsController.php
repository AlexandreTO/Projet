<?php

//src/Controller/ProductsController.php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Entity\Products;

class ProductsController extends AbstractController
{
	/** @Route("/products") */
	public function listProducts(EntityManagerInterface $em): Response
	{
		return $this->render(
			'products.html.twig',
			['products' => $em->getRepository(Products::class)->findBy([], ['name' => 'ASC'])]
		);
	}
}
