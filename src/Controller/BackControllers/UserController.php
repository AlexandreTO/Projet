<?php

namespace App\Controller\BackControllers;

use App\Entity\User;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class UserController extends AbstractController
{
    /** @Route("back/users", name="list_users") */
    public function listUser(EntityManagerInterface $em): Response
    {
        return $this->render(
            'backOffice/users/listUser.html.twig',
            ['users' => $em->getRepository(User::class)->findBy([], ['name' => 'ASC'])]
        );
    }
}
