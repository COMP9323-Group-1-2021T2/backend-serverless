import { Client } from 'pg';

export const editCategory = async (client: Client, id: string, name: string | null = null, info: string | null = null,): Promise<Boolean> => {
    var default_cols = [name, info];
    var default_vals = [name, info];
    var text = 'UPDATE article SET (';
    var values = [id];
    
    //make function
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
