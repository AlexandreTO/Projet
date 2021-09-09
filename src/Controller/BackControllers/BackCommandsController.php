<?php

namespace App\Controller\BackControllers;

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
 * @Route("/back/commands")
 */
class BackCommandsController extends AbstractController
{
    private $token;

    public function __construct(TokenStorageInterface $token)
    {
       $this->token = $token;
    }

    /**
     * @Route("/", name="commands_index", methods={"GET"})
     */
    public function index(CommandeRepository $commandeRepository): Response
    {
        $commandes = $commandeRepository->findAll();
        foreach ($commandes as $commande){
            $content = fgets($commande->getContent());
            $unserial = unserialize($content);
            $commande->setContent($unserial);
        }
     
        return $this->render('backOffice/commands/index.html.twig', [
            'commandes' => $commandes,
        ]);
    }

    /**
     * @Route("/{id}", name="admin_show_command", methods={"GET"})
     */
    public function show(Commande $commande): Response
    {
        $content = fgets($commande->getContent());
        $unserial = unserialize($content);
        $commande->setContent($unserial);
        
        return $this->render('backOffice/commands/show.html.twig', [
            'commande' => $commande,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="commande_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Commande $commande): Response
    {
        $form = $this->createForm(CommandeType::class, $commande);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('commands_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('backOffice/commands/edit.html.twig', [
            'commande' => $commande,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="commande_delete", methods={"POST"})
     */
    public function delete(Request $request, Commande $commande): Response
    {
        if ($this->isCsrfTokenValid('delete'.$commande->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($commande);
            $entityManager->flush();
        }

        return $this->redirectToRoute('commands_index', [], Response::HTTP_SEE_OTHER);
    }
}
