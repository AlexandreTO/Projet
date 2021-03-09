<?php

//src/Controller/ProductsController.php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Entity\Products;
use App\Repository\ProductsRepository;

/** @Route("/products") */
class ProductsController extends AbstractController
{
	/** @Route("/", name="list_product") */
	public function listProducts(ProductsRepository $productsRepository): Response
	{
		return $this->render(
			'products/listProducts.html.twig',
			['products' =>$productsRepository->findBy([], ['name' => 'ASC'])]
		);
	}

	/**
	 * @Route("/view/{id}", name="view_product")
	 */
	public function index(Products $product): Response
	{
		return $this->render('products/viewProduct.html.twig', [
			'product' => $product,
		]);
	}
}
