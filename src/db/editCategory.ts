import { generateEditSQL } from '../utils/helper';
import { Client } from 'pg';

export const editCategory = async (client: Client, id: string, name: string | null = null, info: string | null = null, parent_id: string| null = null): Promise<Boolean> => {
    var default_cols = ['name', 'info', 'parent_id'];
    var default_vals = [name, info, parent_id];
    
    try {
        const sql = generateEditSQL(default_cols, default_vals, 'category', id)
        await client.query(sql);
    } catch (error) {
        return false;
    }
    return true;
} 
