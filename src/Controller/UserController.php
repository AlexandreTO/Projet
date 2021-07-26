<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\AddUserType;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserController extends AbstractController
{
    /** @Route("/user", name="list_user") */
    public function listUser(EntityManagerInterface $em): Response
    {
        return $this->render(
            'user/listUser.html.twig',
            ['users' => $em->getRepository(User::class)->findBy([], ['name' => 'ASC'])]
        );
    }

    /** @Route("/user/add", name="add_user") */
    public function addUser(Request $request, UserPasswordEncoderInterface $passwordEncoder): Response
    {
        $user = new User();
        $form = $this->createForm(AddUserType::class, $user);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $password = $passwordEncoder->encodePassword($user, $user->getPassword());
            // Encode the password after retrieving it from the form
            $user->setPassword($password);
            $em = $this->getDoctrine()->getManager();
            $em->persist($user);
            $em->flush();

            return $this->redirectToRoute("app_login");
        }

        return $this->render('user/addUser.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
