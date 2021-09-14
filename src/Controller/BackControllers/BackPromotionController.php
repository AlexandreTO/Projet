<?php

namespace App\Controller\BackControllers;

use App\Entity\Promotions;
use App\Form\AddPromotionType;
use Stripe\Coupon;
use Stripe\PromotionCode;
use Stripe\Stripe;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;

class BackPromotionController extends AbstractController
{
    /**
     * @Route("/back/add_promotions", name="add_promotions")
     */
    public function addPromotions(Request $request, $stripeSK): Response
    {
        $promotion = new Promotions();
        Stripe::setApiKey($stripeSK);

        $form = $this->createForm(AddPromotionType::class, $promotion);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            // Fetch the data from the form to store them in variables
            $montant = $form->get('montant')->getData();
            $code = $form->get('code')->getData();

            /** 
             * Use the data fetched to populate the creation of the coupon with the ammount of reduction
             * And create the promotion with giving it the new coupon id and the code fetched from the form
             */ 
            $coupon = Coupon::create([
                'percent_off' => $montant,
                'duration' => 'once',
            ]);

            PromotionCode::create([
                'coupon' => $coupon->id,
                'code' => $code
            ]);

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($promotion);
            $entityManager->flush();
            
            return $this->redirectToRoute('back_list_products');
        }

        return $this->render("backOffice/promotions/addPromotions.html.twig", [
            "form_title" => "Ajouter une promotion",
            "form_promo" => $form->createView(),
        ]);
    }
}
