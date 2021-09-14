<?php

namespace App\Controller\BackControllers;


use App\Entity\Categories;
use App\Form\CategoryType;
use App\Repository\CategoriesRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;

/**
 * @Route("/back/categories")
 */
class BackCategoriesController extends AbstractController
{
   /**
     * @Route("/", name="categories", methods={"GET"})
     */
    public function index(CategoriesRepository $categoriesRepository): Response
    {
     
        return $this->render('backOffice/categories/index.html.twig', [
            'categories' => $categoriesRepository->findAll()
        ]);
    }

     /** @Route("/add", name="add_category") */
     public function addCategory(Request $request): Response
     {
         $category = new Categories();
         $form = $this->createForm(CategoryType::class, $category);
         $form->handleRequest($request);
         if ($form->isSubmitted() && $form->isValid()) {
             $em = $this->getDoctrine()->getManager();
             $em->persist($category);
             $em->flush();
 
             return $this->redirectToRoute("categories");
         }
 
         return $this->render('backOffice/categories/addCategory.html.twig', [
             'form' => $form->createView(),
         ]);
     }

    /** @Route("/{id}", name="view_category") */
	public function viewCategory(Categories $category): Response
	{
		return $this->render('backOffice/categories/viewCategory.html.twig', [
			'category' => $category,
		]);
	}

    /**
     * @Route("/delete-category/{id}", name="delete_category")
     */
    public function deleteCategory(int $id): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $category = $entityManager->getRepository(Categories::class)->find($id);
        $entityManager->remove($category);
        $entityManager->flush();

        return $this->redirectToRoute("categories");
    }
}
