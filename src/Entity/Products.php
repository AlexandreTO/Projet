<?php

//src/Entity/Products.php

namespace App\Entity;

use App\Repository\ProductsRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ProductsRepository::class)
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
	private $nom;
	
	/** @ORM\Column(type="string", length=255)*/
	private $description;
	
	/** @ORM\Column(type="float")*/
	private $prix;
	
	/** @ORM\Column(type="string", length=255)*/
	private $image;
	
	/** @ORM\Column(type="integer")*/
	private $promo;
	
	/** @ORM\Column(type="integer")*/
	private $status;
	
	/** @ORM\Column(type="integer")*/
	private $quantite;
	
	/** @ORM\Column(type="integer")*/
	private $categorie;
	
	/** @ORM\Column(type="string", length=255)*/
	private $slug;
	
	/** @ORM\Column(type="string", length=255)*/
	private $code_promo;
	
	// getters
	
	public function getId(): ?int
	{
		return $this->id;
	}
	
	public function getNom(): ?string
	{
		return $this->nom;
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
	
	public function getStatus(): ?int
	{
		return $this->status;
	}
	
	public function getQuantite(): ?int
	{
		return $this->quantite;
	}
	
	public function getCategorie(): ?int
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
	
	// setters
	
	public function setNom(string $nom): self
	{
		$this->nom = $nom;
		
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
	
	public function setStatus(int $status): self
	{
		$this->status = $status;
		
		return $this;
	}
	
	public function setQuantite(int $quantite): self
	{
		$this->quantite = $quantite;
		
		return $this;
	}
	
	public function setCategorie(int $categorie): self
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
}