<?php
declare(strict_types=1);

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/** @Route("/") */
class MainController extends AbstractController
{
    /** @Route("/index") */
    public function index(): Response
    {
        return $this->render('index.html.twig');
    }
}
