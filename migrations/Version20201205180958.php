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
    public function up(Schema $schema): void
    {
        $requete = '
        CREATE TABLE user (
            id INT AUTO_INCREMENT NOT NULL,
            nom VARCHAR(255) NOT NULL,
            prenom VARCHAR(255) NOT NULL,
            pwd VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            phone VARCHAR(255) NOT NULL,
            roles VARCHAR(255) NOT NULL,
            date_creation DATETIME NOT NULL,
            PRIMARY KEY(id)
        );
        ';
        $this->addSql($requete);
        $this->addSql('ALTER TABLE user MODIFY phone varchar(255)');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('DROP TABLE user');
    }

    public function isTransactional(): bool
    {
        return false;
    }
}
