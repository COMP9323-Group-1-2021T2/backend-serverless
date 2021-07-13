import { Client } from 'pg';

export const editVideo = async (client: Client, id: string, category_id: string | null = null,
                                    title: string | null = null, url: string | null = null,
                                    image: string | null = null, description: string | null = null): Promise<Boolean> => {

    var default_cols = ['category_id', 'title', 'url', 'image', 'description'];
    var default_vals = [category_id, title, url, image, description];
    var text = 'UPDATE video SET (';
    var values = [id];
    
    //form string with only non default values
    var j = 2;
    for (let i = 0; i < default_cols.length; i++){
        if (default_vals[i] != null) {
            if (j != 2) text += ', ';
            text += default_cols[i] + ' = $' + j;
            values.push(<string>default_vals[i]);
            j ++;
        }
    }

    if (j == 2) return false;
    text += ') where id = $1;'
    
    const sql = {
        text: text,
        values: values,
    }

    try {
        await client.query(sql);
    } catch (error) {
        return false;
    }
    return true;
} 
