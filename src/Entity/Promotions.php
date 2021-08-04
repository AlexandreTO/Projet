<?php

declare(strict_types=1);

namespace App\Entity;

use App\Repository\PromotionsRepository;
use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;

/**
 * @ApiResource
 * @ORM\Entity(repositoryClass=PromotionsRepository::class)
 * @ORM\HasLifecycleCallbacks()
 */
class Promotions
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /** @ORM\Column(type="string", length=255)*/
    private $code;

    /** @ORM\Column(type="string", length=255)*/
    private $montant;

    /** @ORM\OneToMany(targetEntity="App\Entity\Products", mappedBy="codePromo", cascade={"remove"}) */
    private $codePromo;

    /**
     * @ORM\Column(type="datetime")
     */
    private $dateCreation;

    /** @ORM\PrePersist */
    public function onPrePersist(): void
    {
        $this->dateCreation = new \DateTime();
    }

    public function __construct()
    {
        $this->codePromo = new ArrayCollection();;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setCode(string $code): self
    {
        $this->code = $code;

        return $this;
    }

    public function getCode(): ?string
    {
        return $this->code;
    }

    public function setMontant(string $montant): self
    {
        $this->montant = $montant;

        return $this;
    }

    public function getMontant(): ?string
    {
        return $this->montant;
    }

    /** @return Collection|Products[] */
    public function getCodePromo(): Collection
    {
        return $this->codePromo;
    }

    public function setDateCreation(\DateTimeInterface $dateCreation): self
    {
        $this->dateCreation = $dateCreation;

        return $this;
    }

    public function getDateCreation(): ?\DateTimeInterface
    {
        return $this->dateCreation;
    }
}
