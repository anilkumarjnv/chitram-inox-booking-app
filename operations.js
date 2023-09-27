import mysql from 'mysql2';




const connection = mysql.createPool({
    host:'jtb9ia3h1pgevwb1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user : 'awfjubu3z6v01i64',
    password: 'zkykup5ngwv242pt',
    database: 'ybq3iep1eq6z1vml'
}).promise()

export async function readUser(username) {
    const output = await connection.query("select * from users where username=?",[username])
    return output[0];
    
}

export async function insertUser(username,name,password){
    const result = await connection.query('INSERT INTO users (username,name,password) VALUES (?,?,?)', [username,name,password]);
}
export async function checkUsername(username){
    const result = await connection.query('SELECT * FROM users WHERE username = ?', [username]);
    return(result[0].length)
}

