<?php

declare(strict_types=1);

namespace App\Controller\BackControllers;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class BackMainController extends AbstractController
{
	/** @Route("/back", name="back_office") */
	public function index(): Response
	{
		return $this->render('backOffice/index.html.twig', ['content' => 'coucou',]);
	}
}
