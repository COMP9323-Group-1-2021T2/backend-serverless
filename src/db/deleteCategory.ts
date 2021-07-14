import { Client } from 'pg';

export const deleteCategory = async (client: Client, id: string): Promise<Boolean> => {
    const sql = {
        text: 'DELETE FROM category WHERE id = $1;',
        values: [id],
    }

    try {
        await client.query(sql);
    } catch (error) {
        return false;
    }
    return true;
}
