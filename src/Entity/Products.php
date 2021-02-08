<?php

//src/Entity/Products.php

namespace App\Entity;

use App\Repository\ProductsRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ProductsRepository::class)
 * @ORM\HasLifecycleCallbacks()
 */

class Products
{
	/**
	 * @ORM\Id
	 * @ORM\GeneratedValue
	 * @ORM\Column(type="integer")
	 */
	private $id;

	/** @ORM\Column(type="string", length=200)*/
	private $name;

	/** @ORM\Column(type="string", length=255)*/
	private $description;

	/** @ORM\Column(type="float")*/
	private $prix;

	/** @ORM\Column(type="string", length=255)*/
	private $image;

	/** @ORM\Column(type="integer")*/
	private $promo;

	/** @ORM\Column(type="boolean")*/
	private $status;

	/** @ORM\Column(type="integer")*/
	private $quantite;

	/** 
	 * @ORM\ManyToOne(targetEntity="App\Entity\Categories", inversedBy="products")
	 * @ORM\JoinColumn(onDelete="CASCADE")
	 */
	private $categorie;

	/** @ORM\Column(type="string", length=255)*/
	private $slug;

	/** @ORM\Column(type="string", length=255)*/
	private $code_promo;

	/**
	 * @ORM\Column(type="date")
	 */
	private $dateCreation;

	/**
	 * @ORM\Column(type="date", nullable=true)
	 */
	private $dateModification;


	/** @ORM\PrePersist */
	public function onPrePersist(): void
	{
		$this->dateCreation = new \DateTime();
		$this->dateModification = new \DateTime();
	}

	/**@ORM\PreUpdate */
	public function onPreUpdate(): void
	{
		$this->dateModification = new \DateTime();
	}

	public function getId(): ?int
	{
		return $this->id;
	}

	public function getName(): ?string
	{
		return $this->name;
	}

	public function getDescription(): ?string
	{
		return $this->description;
	}

	public function getPrix(): ?float
	{
		return $this->prix;
	}

	public function getImage(): ?string
	{
		return $this->image;
	}

	public function getPromo(): ?int
	{
		return $this->promo;
	}

	public function getStatus(): ?bool
	{
		return $this->status;
	}

	public function getQuantite(): ?int
	{
		return $this->quantite;
	}

	public function getCategorie(): ?Categories
	{
		return $this->categorie;
	}

	public function getSlug(): ?string
	{
		return $this->slug;
	}

	public function getCodepromo(): ?string
	{
		return $this->code_promo;
	}

	public function getDateCreation(): ?\DateTimeInterface
	{
		return $this->dateCreation;
	}


	public function getDateModification(): ?\DateTimeInterface
	{
		return $this->dateModification;
	}

	// setters

	public function setName(string $name): self
	{
		$this->name = $name;

		return $this;
	}

	public function setDescription(string $description): self
	{
		$this->description = $description;

		return $this;
	}

	public function setPrix(float $prix): self
	{
		$this->prix = $prix;

		return $this;
	}

	public function setImage(string $image): self
	{
		$this->image = $image;

		return $this;
	}

	public function setPromo(int $promo): self
	{
		$this->promo = $promo;

		return $this;
	}

	public function setStatus(bool $status): self
	{
		$this->status = $status;

		return $this;
	}

	public function setQuantite(int $quantite): self
	{
		$this->quantite = $quantite;

		return $this;
	}

	public function setCategorie(Categories $categorie): self
	{
		$this->categorie = $categorie;

		return $this;
	}

	public function setSlug(string $slug): self
	{
		$this->slug = $slug;

		return $this;
	}

	public function setCodepromo(string $code_promo): self
	{
		$this->code_promo = $code_promo;

		return $this;
	}

	public function setDateCreation(\DateTimeInterface $dateCreation): self
	{
		$this->dateCreation = $dateCreation;

		return $this;
	}

	public function setDateModification(?\DateTimeInterface $dateModification): self
	{
		$this->dateModification = $dateModification;

		return $this;
	}
}
