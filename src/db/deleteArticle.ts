import { Client } from 'pg';

export const deleteArticle = async (client: Client, id: string): Promise<Boolean> => {
    const sql = {
        text: 'DELETE FROM article WHERE id = $1;',
        values: [id],
    }

    try {
        await client.query(sql);
    } catch (error) {
        return false;
    }
    return true;
}
