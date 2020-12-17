<?php

//src/Repository/ProductsRepository.php

namespace App\Repository;

use Doctrine\ORM\EntityRepository;

class ProductsRepository extends EntityRepository
{
<<<<<<< HEAD
	public function products()
	{
		return $this->createQueryBuilder('a')
					->getQuery()
					->getResult();
	}
=======
	
>>>>>>> 1e249bca1af3a3aa1deeed04d549d4425aed7e9c
}