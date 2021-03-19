<?php

namespace App\Controller;

use App\Service\CartService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class CartController extends AbstractController
{
    /**
     * @Route("/cart", name="cart_index")
     */
    public function index(CartService $cartService)
    {
        return $this->render('cart/cart.html.twig', [
            'items' => $cartService->getCart(),
            'total' => $cartService->getTotalPrice()
        ]);
    }

    /** @Route("/cart/add/{id}", name="cart_add") */
    public function addProduct(int $id, CartService $cartService)
    {
        $cartService->add($id);
        return $this->redirectToRoute('cart_index');
    }
}
