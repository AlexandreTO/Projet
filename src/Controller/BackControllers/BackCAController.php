<?php

namespace App\Controller\BackControllers;

use App\Repository\CommandeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;

/**
 * @Route("/back/CA")
 */
class BackCAController extends AbstractController
{
   /**
     * @Route("/", name="CA", methods={"GET"})
     */
    public function index(CommandeRepository $commandeRepository): Response
    {
        $commandes = $commandeRepository->findAll();
        foreach ($commandes as $commande){
            $content = fgets($commande->getContent());
            $unserial = unserialize($content);
            $commande->setContent($unserial);
        }
     
        return $this->render('backOffice/CA.html.twig', [
            'commandes' => $commandes,
        ]);
    }
}
