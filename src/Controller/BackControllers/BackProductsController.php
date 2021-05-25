<?php

namespace App\Controller\BackControllers;

use App\Entity\Products;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Repository\ProductsRepository;

class BackProductsController extends AbstractController
{
	/** @Route("/back/products", name="back_list_products") */
	public function listProducts(ProductsRepository $productsRepository): Response
	{
		return $this->render(
			'backOffice/products/products.html.twig',
			['products' => $productsRepository->findBy([], ['name' => 'ASC'])]
		);
	}

	/** @Route("/products/{id}", name="view_product") */
	public function viewProduct(Products $product): Response
	{
		return $this->render('products/viewProduct.html.twig', [
			'product' => $product,
		]);
	}
}
