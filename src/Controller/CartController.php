<?php

namespace App\Controller;

use App\Entity\Commande;
use App\Service\CartService;
use Stripe\Checkout\Session;
use Stripe\Stripe;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class CartController extends AbstractController
{

    /** @Route("/cart", name="cart_index") */
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

    /** @Route("/cart/remove/{id}", name="cart_remove") */
    public function removeProduct(int $id, CartService $cartService)
    {
        $cartService->remove($id);
        return $this->redirectToRoute('cart_index');
    }

    /** @Route("/cart/reset", name="cart_reset") */
    public function resetCart(CartService $cartService)
    {
        $cartService->reset();
        return $this->redirectToRoute('cart_index');
    }

    /** @Route("create-checkout-session", name="checkout") */
    public function checkoutStripe($stripeSK, CartService $cartService)
    {
        // Private stripe key stored in the .env.local for more security. Binded in services.yaml
        Stripe::setApiKey($stripeSK);

        // Stripe created a session to buy the products / cart
        $session = Session::create([
            'payment_method_types' => ['card'],
            'line_items' => [[
                'price_data' => [
                    'currency' => 'eur',
                    'product_data' => [
                        'name' => "Total",
                    ],
                    'unit_amount' => $cartService->getTotalPrice() * 100, // need to multiply by 100 to get the actual price with Stripe
                ],
                'quantity' => 1,
            ]],
            'mode' => 'payment',
            'allow_promotion_codes' => true,
            'success_url' => $this->generateUrl('success_url', [], UrlGeneratorInterface::ABSOLUTE_URL),
            'cancel_url' => $this->generateUrl('cancel_url', [], UrlGeneratorInterface::ABSOLUTE_URL),
        ]);

        return $this->redirect($session->url, 303);
    }

    /** @Route("/success_url", name="success_url") */
    public function successUrl(CartService $cartService)
    {
        $cartService->reset();
        return $this->render('payment/success.html.twig');
    }

    /** @Route("/cancel_url", name="cancel_url") */
    public function cancelUrl()
    {
        return $this->render('payment/cancel.html.twig');
    }
}
