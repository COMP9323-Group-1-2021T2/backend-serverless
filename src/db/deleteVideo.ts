import { Client } from 'pg';

export const deleteVideo = async (client: Client, id: string): Promise<Boolean> => {
    const sql = {
        text: 'DELETE FROM video WHERE id = $1;',
        values: [id],
    }

    try {
        await client.query(sql);
    } catch (error) {
        return false;
    }
    return true;
}
