<?php

//src/Entity/Products.php

namespace App\Entity;

use App\Repository\ProductsRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Validator\Constraints as Assert;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity(repositoryClass=ProductsRepository::class)
 * @ORM\HasLifecycleCallbacks()
 * @ApiResource
 * @Vich\Uploadable()
 */

class Products
{
	/**
	 * @ORM\Id
	 * @ORM\GeneratedValue
	 * @ORM\Column(type="integer")
	 */
	private $id;

	/**
	 * @var File|null
	 * @Vich\UploadableField(mapping="product_image", fileNameProperty="image")
	 */
	private $imageFile;

	/** 
	 * @ORM\Column(type="string", length=200)
	 * @Assert\NotBlank
	 * @Assert\Length(
     *      min = 5,
     *      max = 50,
     *      minMessage = "The product name must be at least {{ limit }} characters long",
     *      maxMessage = "The product name cannot be longer than {{ limit }} characters"
     * )
	 */
	private $name;

	/** @ORM\Column(type="string", length=255)*/
	private $description;

	/** 
	 * @ORM\Column(type="float")
	 * @Assert\NotBlank
	 * */
	private $prix;

	/** @ORM\Column(type="string", length=255)*/
	private $image;

	/** @ORM\Column(type="boolean")*/
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

	/** 
	 * @ORM\ManyToOne(targetEntity="App\Entity\Promotions", inversedBy="codePromo")
	 * @ORM\JoinColumn(onDelete="CASCADE")
	 */
	private $codePromo;

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

	public function getCodepromo(): ?Promotions
	{
		return $this->codePromo;
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

	public function setPromo(string $promo): self
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

	public function setCategorie(?Categories $categorie): self
	{
		$this->categorie = $categorie;

		return $this;
	}

	public function setSlug(string $slug): self
	{
		$this->slug = $slug;

		return $this;
	}

	public function setCodePromo(?Promotions $codePromo): self
	{
		$this->codePromo = $codePromo;

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

	/**
	 * Get the value of imageFile
	 *
	 * @return  File|null
	 */ 
	public function getImageFile()
	{
		return $this->imageFile;
	}

	/**
	 * Set the value of imageFile
	 *
	 * @param  File|null  $imageFile
	 *
	 * @return  self
	 */ 
	public function setImageFile($imageFile)
	{
		$this->imageFile = $imageFile;

		return $this;
	}
}
