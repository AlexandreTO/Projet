<?php

//src/Repository/ProductsRepository.php

namespace App\Repository;

use Doctrine\ORM\EntityRepository;

class ProductsRepository extends EntityRepository
{
	public function products()
	{
		return $this->createQueryBuilder('a')
					->getQuery()
					->getResult();
	}
}