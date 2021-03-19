<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210209101836 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE products ADD code_promo_id INT DEFAULT NULL, DROP code_promo, CHANGE promo promo TINYINT(1) NOT NULL');
        $this->addSql('ALTER TABLE products ADD CONSTRAINT FK_B3BA5A5A294102D4 FOREIGN KEY (code_promo_id) REFERENCES promotions (id) ON DELETE CASCADE');
        $this->addSql('CREATE INDEX IDX_B3BA5A5A294102D4 ON products (code_promo_id)');
        $this->addSql('ALTER TABLE promotions DROP code_promo');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE products DROP FOREIGN KEY FK_B3BA5A5A294102D4');
        $this->addSql('DROP INDEX IDX_B3BA5A5A294102D4 ON products');
        $this->addSql('ALTER TABLE products ADD code_promo VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, DROP code_promo_id, CHANGE promo promo INT NOT NULL');
        $this->addSql('ALTER TABLE promotions ADD code_promo VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`');
    }

    public function isTransactional(): bool
    {
        return false;
    }
}
