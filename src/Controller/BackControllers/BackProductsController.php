<?php

namespace App\Controller\BackControllers;

use App\Entity\Products;
use App\Form\ProductFormType;
use App\Repository\ProductsRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class BackProductsController extends AbstractController
{
    /** @Route("/back/products", name="back_list_products") */
    public function listProducts(ProductsRepository $productsRepository): Response
    {
        return $this->render(
            'backOffice/products/products.html.twig',
            ['products' => $productsRepository->findBy([], ['name' => 'ASC'])]
        );
    }

    /** @Route("/back/products/{id}", name="back_view_product") */
    public function viewProduct(Products $product): Response
    {
        return $this->render('backOffice/products/viewProduct.html.twig', [
            'product' => $product,
        ]);
    }

    /**
     * @Route("/back/add-product", name="add_product")
     */
    public function addProduct(Request $request): Response
    {
        $product = new Products();
        
        $form = $this->createForm(ProductFormType::class, $product);
        $form->handleRequest($request); 

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $product->setPromo(1);
            $entityManager->persist($product);
            $entityManager->flush();
            return $this->redirectToRoute('back_list_products');
        }

        return $this->render("backOffice/products/addProducts.html.twig", [
            "form_title" => "Ajouter un produit",
            "form_product" => $form->createView(),
        ]);
    }

    /**
     * @Route("/back/update-product/{id}", name="update_product")
     */
    public function updateProduct(Request $request, int $id): Response
    {
        $entityManager = $this->getDoctrine()->getManager();

        $product = $entityManager->getRepository(Products::class)->find($id);
        $form = $this->createForm(ProductFormType::class, $product);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();
            return $this->redirectToRoute('back_list_products');
        }

        return $this->render("backOffice/products/updateProduct.html.twig", [
            "form_title" => "Modifier un produit",
            "form_product" => $form->createView(),
        ]);
    }

    /**
     * @Route("/back/delete-product/{id}", name="delete_product")
     */
    public function deleteProduct(int $id): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $product = $entityManager->getRepository(Products::class)->find($id);
        $entityManager->remove($product);
        $entityManager->flush();

        return $this->redirectToRoute("back_list_products");
    }
}
