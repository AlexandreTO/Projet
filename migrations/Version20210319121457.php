<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210319121457 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE order_products DROP FOREIGN KEY FK_5242B8EBE238517C');
        $this->addSql('DROP TABLE `order`');
        $this->addSql('DROP TABLE order_products');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE `order` (id INT AUTO_INCREMENT NOT NULL, status VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, date_creation DATE NOT NULL, date_modification DATE DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE order_products (id INT AUTO_INCREMENT NOT NULL, product_id INT NOT NULL, order_ref_id INT NOT NULL, quantity INT NOT NULL, INDEX IDX_5242B8EB4584665A (product_id), INDEX IDX_5242B8EBE238517C (order_ref_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE order_products ADD CONSTRAINT FK_5242B8EB4584665A FOREIGN KEY (product_id) REFERENCES products (id)');
        $this->addSql('ALTER TABLE order_products ADD CONSTRAINT FK_5242B8EBE238517C FOREIGN KEY (order_ref_id) REFERENCES `order` (id)');
    }

    public function isTransactional(): bool
    {
        return false;
    }
}
