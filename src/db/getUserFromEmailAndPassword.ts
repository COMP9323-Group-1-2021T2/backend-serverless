import { Client } from 'pg';
import { User } from '../types';
import { compareSync } from "bcryptjs";

//Retrieves 'users' records from database with matching email to input, and validates password
export const getUserFromEmailAndPassword = async (client: Client, email: string, password: string): Promise<User> => {
  const query = {
    text: 'SELECT * FROM users WHERE email = $1',
    values: [email],
  }

  const user = (await client.query<User>(query)).rows[0]

  const isPasswordMatched = compareSync(password, user.password)

  if (!isPasswordMatched) {
    throw new Error("password failed")
  }

  return user;
}
