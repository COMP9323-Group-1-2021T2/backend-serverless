import { generateEditSQL } from '../utils/helper';
import { Client } from 'pg';

export const editArticle = async (client: Client, id: string, category_id: string | null = null,
                                    title: string | null = null, url: string | null = null,
                                    image: string | null = null, description: string | null = null): Promise<Boolean> => {

    var default_cols = ['category_id', 'title', 'url', 'image', 'description'];
    var default_vals = [category_id, title, url, image, description];
 
    try {
        const sql = generateEditSQL(default_cols, default_vals, 'article', id)
        await client.query(sql);
    } catch (error) {
        return false;
    }
    return true;
} 
