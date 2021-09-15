<?php

namespace App\Service;

use App\Repository\ProductsRepository;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

// Service to simplify the cart functionnalities (add, remove, getTotalPrice)
class CartService
{
    protected $session;
    protected $productsRepository;

    public function __construct(SessionInterface $session, ProductsRepository $productsRepository)
    {
        $this->session = $session;
        $this->productsRepository = $productsRepository;
    }

    public function add(int $id)
    {
        $cart = $this->session->get('cart', []);

        // If the cart is empty we add the product in the cart
        // Else we increment by one each time the same product get added
        if (!empty($cart[$id])) {
            $cart[$id]++;
        } else {
            $cart[$id] = 1;
        }

        $this->session->set('cart', $cart);
    }

    public function getCart(): array
    {
        $cart = $this->session->get('cart', []);
        $test = $this->session->getName();

        $cartWithData = [];
        foreach ($cart as $id => $quantity) {
            $cartWithData[] = [
                'product' => $this->productsRepository->find($id),
                'quantity' => $quantity
            ];
        }

        return $cartWithData;
    }

    public function remove(int $id)
    {
        // Retrieve the cart session
        $cart = $this->session->get('cart', []);

        if (!empty($cart[$id])) {
            // Remove the product with his id with unset
            unset($cart[$id]);
        }

        $this->session->set('cart', $cart);
    }

    public function getTotalPrice(): float
    {
        $total = 0;

        foreach ($this->getCart() as $item) {
            $totalItem = $item['product']->getPrix() * $item['quantity'];
            $total +=  $totalItem;
        }

        return $total;
    }

    public function reset() {
        $this->session->get('cart', []);
        $this->session->set('cart', []);
    }
}
