<?php

//src/Repository/ProductsRepository.php

namespace App\Repository;

use Doctrine\ORM\EntityRepository;

class ProductsRepository extends EntityRepository
{
	public function listProducts()
	{
		return $this->createQueryBuilder('a')
					->getQuery()
					->getResult();
	}

}