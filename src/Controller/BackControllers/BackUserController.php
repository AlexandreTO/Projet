<?php

namespace App\Controller\BackControllers;

use App\Entity\User;
use App\Form\AddUserType;
use App\Repository\UsersRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class BackUserController extends AbstractController
{
    /** @Route("back/users", name="list_users") */
    public function listUser(EntityManagerInterface $em): Response
    {
        return $this->render(
            'backOffice/users/users.html.twig',
            ['users' => $em->getRepository(User::class)->findBy([], ['name' => 'ASC'])]
        );
    }

    /** @Route("back/users/add", name="add_user") */
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

            return $this->redirectToRoute("list_users");
        }

        return $this->render('backOffice/users/addUser.html.twig', [
            'form' => $form->createView(),
        ]);
    }
    
    /**
 	* @Route("/back/update-user/{id}", name="update_user")
	*/
	public function updateUser(Request $request, int $id): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
    
        $user = $entityManager->getRepository(User::class)->find($id);
        $form = $this->createForm(AddUserType::class, $user);
        $form->handleRequest($request);
    
        if($form->isSubmitted() && $form->isValid())
        {
            $entityManager->flush();
            return $this->redirectToRoute('list_users');
        }
    
        return $this->render("backOffice/users/updateUser.html.twig", [
            "form_title" => "Modifier un compte utilisateur",
            "form" => $form->createView(),
        ]);
    }
    /**
     * @Route("/back/delete-user/{id}", name="delete_user")
     */
    public function deleteUser(int $id): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $user = $entityManager->getRepository(User::class)->find($id);
        $entityManager->remove($user);
        $entityManager->flush();

        return $this->redirectToRoute("list_users");
    }

}
