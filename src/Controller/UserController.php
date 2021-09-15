<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\AddUserType;
use App\Repository\CommandeRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserController extends AbstractController
{
    /** @Route("/registry", name="registry") */
    public function addUser(Request $request, UserPasswordEncoderInterface $passwordEncoder): Response
    {
        $user = new User();
        $form = $this->createForm(AddUserType::class, $user);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $password = $passwordEncoder->encodePassword($user, $user->getPassword());
            // Encode the password after retrieving it from the form
            $user->setPassword($password);
            $roles = ['ROLE_ADMIN'];
            $user->setRoles($roles);
            $em = $this->getDoctrine()->getManager();
            $em->persist($user);
            $em->flush();

            $this->addFlash('success', "Account created");

            return $this->redirectToRoute("app_login");
        }

        return $this->render('user/addUser.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /** @Route("/user/{id}/commands", name="user_commands") */
    public function userCommands(int $id, CommandeRepository $commandeRepository): Response
    {
        $commandes = $commandeRepository->findBy(
            ['user' => $id]
        );
        foreach ($commandes as $commande){
            $content = fgets($commande->getContent());
            $unserial = unserialize($content);
            $commande   ->setContent($unserial);
        }
        return $this->render('user/commands.html.twig', [
            'commandes' => $commandes,
        ]);
    }
}
