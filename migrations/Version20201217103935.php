<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20201217103935 extends AbstractMigration
{
    public function up(Schema $schema): void
    {
        $requestPromotions = '
        CREATE TABLE promotions (
            id INT AUTO_INCREMENT NOT NULL,
            code VARCHAR(255) NOT NULL,
            montant VARCHAR(255) NOT NULL,
            code_promo VARCHAR(255) NOT NULL,
            date_creation DATETIME NOT NULL,
            PRIMARY KEY(id)
        );
        ';

        $this->addSql($requestPromotions);
    }

    public function down(Schema $schema): void
    {
        $this->addSql('DROP TABLE promotions');
    }

    public function isTransactional(): bool
    {
        return false;
    }
}
