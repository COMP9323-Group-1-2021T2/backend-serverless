import { Client } from 'pg'

//Generates new postgres client in current environment
export const getClient = (): Client => {
  return new Client({
    connectionString: process.env.DB_CONN_URL
  })
}
