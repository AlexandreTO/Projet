<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class UserController extends AbstractController
{
    /** @Route("/user", name="list_user") */
    public function listUser(EntityManagerInterface $em): Response
    {
        return $this->render(
            'listUser.html.twig',
            ['users' => $em->getRepository(User::class)->findBy([], ['nom' => 'ASC'])]
        );
    }
}