<?php

namespace App\Entity;

use App\Repository\OrderProductsRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=OrderProductsRepository::class)
 */
class OrderProducts
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Products::class)
     * @ORM\JoinColumn(nullable=false)
     */
    private $product;

    /** @ORM\Column(type="integer")*/
    private $quantity;

    /**
     * @ORM\ManyToOne(targetEntity=OrderProcess::class, inversedBy="items")
     * @ORM\JoinColumn(nullable=false)
     */
    private $orderRef;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getProduct(): ?Products
    {
        return $this->product;
    }

    public function setProduct(?Products $product): self
    {
        $this->product = $product;

        return $this;
    }

    public function getQuantity(): ?int
    {
        return $this->quantity;
    }

    public function setQuantity(int $quantity): self
    {
        $this->quantity = $quantity;

        return $this;
    }


    public function getOrderRef(): ?OrderProcess
    {
        return $this->orderRef;
    }

    public function setOrderRef(?OrderProcess $orderRef): self
    {
        $this->orderRef = $orderRef;

        return $this;
    }

    /* Tests if the given item given corresponds to the same order item.
    *
    * @param OrderItem $item
    *
    * @return bool
    */
   public function equals(OrderProducts $item): bool
   {
       return $this->getProduct()->getId() === $item->getProduct()->getId();
   }
}
