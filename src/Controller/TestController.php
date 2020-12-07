<?php
namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class TestController
{
    /** @Route("/") */
    public function number(): Response
    {
        $number = random_int(0, 100);
        $TesTea = 0;
        return new Response(
            '<html><body>Lucky number: '.$number.'</body></html>'
        );
    }
}