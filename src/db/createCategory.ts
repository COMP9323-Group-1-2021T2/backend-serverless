import { Client } from 'pg';

export const createCategory = async (client: Client, name: string, info: string, parent_id: string | null): Promise<Boolean> => {
    const sql = {
        text: 'INSERT INTO category (name, info) VALUES ($1, $2);',
        values: [name, info, parent_id],
    }

    try {
        await client.query(sql);
    } catch (error) {
        return false;
    }
    return true;
}
