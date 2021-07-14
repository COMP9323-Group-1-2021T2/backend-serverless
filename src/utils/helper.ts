export function generateEditSQL(default_cols: string[], default_vals: (string | null)[], table: string, primary_key: string) {
    //make function
    //form string with only non default values
    var values = [primary_key];
    var text = 'UPDATE ' + table + ' SET (';

    var j = 2;
    for (let i = 0; i < default_cols.length; i++){
        if (default_vals[i] != null) {
            if (j != 2) text += ', ';
            text += default_cols[i] + ' = $' + j;
            values.push(<string>default_vals[i]);
            j ++;
        }
    }

    if (j == 2) throw new Error('No fields to be edited!');
    text += ') where id = $1;'
    
    const sql = {
        text: text,
        values: values,
    }

    return sql;
}