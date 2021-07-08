import { Client } from "pg";

const migrations = {
  v00_add_uuid_extension: async (client: Client) => {
    await client.query(`
      CREATE EXTENSION "uuid-ossp";
    `);
  },
  v01_create_category: async (client: Client) => {
    await client.query(`
      CREATE TABLE category
        (
           id         VARCHAR(40) NOT NULL,
           name       TEXT NOT NULL,
           parent_id  VARCHAR(40) NOT NULL,
           created_at TIMESTAMP NOT NULL,
           PRIMARY KEY(id),
           CONSTRAINT fk_parent FOREIGN KEY(parent_id) REFERENCES category(id)
        );
    `);
  },
  v02_create_category_info: async (client: Client) => {
    await client.query(`
      CREATE TABLE category_info
        (
           id          UUID DEFAULT uuid_generate_v4(),
           category_id VARCHAR(40) NOT NULL,
           info        TEXT NOT NULL,
           created_at  TIMESTAMP NOT NULL,
           PRIMARY KEY(id),
           CONSTRAINT fk_category FOREIGN KEY(category_id) REFERENCES category(id)
        );
    `);
  },
  v03_create_article: async (client: Client) => {
    await client.query(`
      CREATE TABLE article
        (
           id          UUID DEFAULT uuid_generate_v4(),
           category_id VARCHAR(40) NOT NULL,
           title       TEXT NOT NULL,
           url         TEXT NOT NULL,
           image       TEXT NOT NULL,
           description TEXT NOT NULL,
           created_at  TIMESTAMP NOT NULL,
           PRIMARY KEY(id),
           CONSTRAINT fk_category FOREIGN KEY(category_id) REFERENCES category(id)
        );
    `);
  },
  v04_create_video: async (client: Client) => {
    await client.query(`
      CREATE TABLE video
        (
           id          UUID DEFAULT uuid_generate_v4(),
           category_id VARCHAR(40) NOT NULL,
           title       TEXT NOT NULL,
           url         TEXT NOT NULL,
           image       TEXT NOT NULL,
           description TEXT NOT NULL,
           created_at  TIMESTAMP NOT NULL,
           PRIMARY KEY(id),
           CONSTRAINT fk_category FOREIGN KEY(category_id) REFERENCES category(id)
        );
    `);
  },
  v05_add_created_at_defaults: async (client: Client) => {
    await client.query(`
      ALTER TABLE category ALTER COLUMN created_at SET DEFAULT NOW();
      ALTER TABLE category_info ALTER COLUMN created_at SET DEFAULT NOW();
      ALTER TABLE article ALTER COLUMN created_at SET DEFAULT NOW();
      ALTER TABLE video ALTER COLUMN created_at SET DEFAULT NOW();
    `);
  },
  v06_make_category_parent_id_nullable: async (client: Client) => {
    await client.query(`
      ALTER TABLE category ALTER COLUMN parent_id DROP NOT NULL;
    `);
  },
};

export default migrations;
