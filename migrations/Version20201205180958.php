<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201205180958 extends AbstractMigration
{
    public function up(Schema $schema) : void
    {
        $requete = '
        CREATE TABLE user (
            id INT AUTO_INCREMENT NOT NULL,
            nom VARCHAR(255) NOT NULL,
            prenom VARCHAR(255) NOT NULL,
            pwd VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            phone VARCHAR(10) NOT NULL,
            roles VARCHAR(255) NOT NULL,
            dateCreation DATETIME NOT NULL,
            PRIMARY KEY(id)
        );
        ';
        $this->addSql($requete);
    }

    public function down(Schema $schema) : void
    {
        $this->addSql('DROP TABLE user');
    }
}
