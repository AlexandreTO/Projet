<?php

namespace App\Controller;

use App\Entity\Commande;
use App\Form\CommandeType;
use App\Repository\CommandeRepository;
use App\Repository\UserRepository;
use App\Service\CartService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;

/**
 * @Route("/commands")
 */
class CommandeController extends AbstractController
{
    private $token;

    public function __construct(TokenStorageInterface $token)
    {
       $this->token = $token;
    }

    /**
     * @Route("/new", name="commande_new", methods={"GET","POST"})
     */
    public function new(Request $request, CartService $cartService, UserRepository $userRepository): Response
    {
        $commande = new Commande();
        $form = $this->createForm(CommandeType::class, $commande);
        $form->handleRequest($request);
        $array = $cartService->getCart();
        $content = (serialize($cartService->getCart()));


        if ($form->isSubmitted() && $form->isValid()) {
            $userId = $form->getData();
            $content = (serialize($cartService->getCart()));
            $commande->setContent($content);
            $status = 'Impayée';
            $commande->setStatus($status);
            $commande->setStatusSend($status);
            $commande->setDateCreation(new \DateTime);
            $commande->setUser($this->token->getToken()->getUser());
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($commande);
            $entityManager->flush();

            return $this->redirectToRoute('user_commands', ['id' => $this->token->getToken()->getUser()->getId()], Response::HTTP_SEE_OTHER);
        }

        return $this->render('commande/new.html.twig', [
            'commande' => $commande,
            'form' => $form->createView(),
            'content' => $content,
            'array' => $array,
        ]);
    }

    /**
     * @Route("/{id}", name="commande_show", methods={"GET"})
     */
    public function show(Commande $commande): Response
    {
        $content = fgets($commande->getContent());
        $unserial = unserialize($content);
        $commande->setContent($unserial);
        
        return $this->render('commande/show.html.twig', [
            'commande' => $commande,
        ]);
    }
}
