<?php

namespace App\Entity;

use App\Repository\CategoriesRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Symfony\Component\Validator\Constraints as Assert;
use Vich\UploaderBundle\Mapping\Annotation as Vich;



/**
 * @ORM\Entity(repositoryClass=CategoriesRepository::class)
 * @ORM\HasLifecycleCallbacks()
 * @ApiResource
 * @Vich\Uploadable()
 */
class Categories
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;


    /**
	 * @var File|null
	 * @Vich\UploadableField(mapping="category_image", fileNameProperty="nameImage")
	 */
	private $imageFile;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $description;

    /**
     * @ORM\Column(type="boolean")
     */
    private $status;

    /**
     * @ORM\Column(type="date")
     */
    private $dateCreation;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $dateModification;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $nameImage;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Products", mappedBy="categorie", cascade={"remove"})
     */
    private $products;

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

    public function __construct()
    {
        $this->products = new ArrayCollection();;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getStatus(): ?bool
    {
        return $this->status;
    }

    public function setStatus(bool $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getDateCreation(): ?\DateTimeInterface
    {
        return $this->dateCreation;
    }

    /** @return Collection|Products[] */
    public function getProducts(): Collection
    {
        return $this->products;
    }

    public function setDateCreation(\DateTimeInterface $dateCreation): self
    {
        $this->dateCreation = $dateCreation;

        return $this;
    }

    public function getDateModify(): ?\DateTimeInterface
    {
        return $this->dateModification;
    }

    public function setDateModify(?\DateTimeInterface $dateModification): self
    {
        $this->dateModification = $dateModification;

        return $this;
    }

    public function getNameImage(): ?string
    {
        return $this->nameImage;
    }

    public function setNameImage(?string $nameImage): self
    {
        $this->nameImage = $nameImage;

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
