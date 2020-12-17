<?php

//src/Controller/MainController.php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class MainController extends AbstractController
{
	public function index(){
		return $this->render("index.html.twig");
	}
}