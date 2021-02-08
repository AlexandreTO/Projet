<?php
declare(strict_types=1);

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Products;

class MainController extends AbstractController
{
    /** @Route("/") */
    public function index(): Response
    {
        return $this->render('index.html.twig', ['content' => 'coucou',]);
    }
	
	/** @Route("/products") */
	public function products(EntityManagerInterface $em): Response
	{
		$products = $this->$em->getRepository(Products::class)->listProducts();
						 
		return $this->render("products.html.twig", ['products' => $products,]);
	}
}