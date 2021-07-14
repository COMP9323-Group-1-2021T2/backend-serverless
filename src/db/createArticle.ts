import { Client } from 'pg';

export const createArticle = async (client: Client, category_id: string, title: string, url: string, image: string, description: string): Promise<Boolean> => {
    const sql = {
        text: 'INSERT INTO article (category_id, title, url, image, description) VALUES ($1, $2, $3, $4, $5);',
        values: [category_id, title, url, image, description],
    }

    try {
        await client.query(sql)
    } catch (error) {
        return false;
    }
    return true;
}
