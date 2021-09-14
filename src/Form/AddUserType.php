<?php

namespace App\Form;

use App\Entity\User;
use Faker\Core\Number;
use libphonenumber\PhoneNumberFormat;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TelType;

class AddUserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('lastName', TextType::class, array('label' => 'Nom de Famille'))
            ->add('name', TextType::class, array('label' => 'Prénom'))
            ->add('username', TextType::class, array('label' => 'Nom d\'utilisateur'))
            ->add('password', PasswordType::class, array('label' => 'Mot de passe'))
            ->add('email', EmailType::class, array('label' => 'Email'))
            ->add('phone', TelType::class, array('label' => 'Numéro de téléphone'))
            ->add('address', TextType::class, array('label' => 'Adresse'))
            ->add('city', TextType::class, array('label' => 'Ville'))
            ->add('zipcode', NumberType::class, array('label' => 'Code Postal'));
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
