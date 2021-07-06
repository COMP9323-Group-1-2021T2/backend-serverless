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
};

export default migrations;
