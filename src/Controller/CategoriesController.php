<?php

namespace App\Controller;

use App\Entity\Categories;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Repository\ProductsRepository;
use App\Repository\CategoriesRepository;

class CategoriesController extends AbstractController
{
	/** @Route("/categories", name="categories") */
	public function listCategories(CategoriesRepository $categoriesRepository): Response
	{
		return $this->render(
			'categories/index.html.twig',
			['categories' => $categoriesRepository->findBy([], ['title' => 'ASC'])]
		);
	}

	/** @Route("/categories/{id}/products", name="category_products") */
	public function categoryProducts(int $id,Categories $category, ProductsRepository $productsRepository): Response
	{
		return $this->render('categories/viewProducts.html.twig');
	}
}
