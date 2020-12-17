<?php

declare(strict_types=1);

namespace App\Entity;

use App\Repository\PromotionsRepository;
use Doctrine\ORM\Mapping as ORM;

/**
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

    /** @ORM\Column(type="string", length=255)*/
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

    public function setCodePromo(string $codePromo): self
    {
        $this->codePromo = $codePromo;

        return $this;
    }

    public function getCodePromo(): ?string
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
