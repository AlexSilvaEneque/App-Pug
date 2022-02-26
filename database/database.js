const mysql2 = require('mysql2')
const { db_host, db_port, db_user, db_password, db_name } = require('../config')

const connection = mysql2.createConnection({
    host: db_host,
    port: db_port,
    user: db_user,
    password: db_password,
    database: db_name
})

function query(sql, data) {
    return new Promise((resolve, reject) => {
        connection.query(sql, data, (err, res) => {
            if (err) {
                reject(err.sqlMessage)
            }
            else {
                resolve(res)
            }
        })
    })
}

async function insert (tableName, data) {
    try {
        await query(`INSERT INTO ${tableName} (??) values (?)`, [Object.keys(data), Object.values(data)])
        return {data, success: true}
    } catch (error) {
        return {error, success: false}
    }
}


async function del (tableName, id) {
    try {
        await query(`DELETE FROM ${tableName} WHERE id = ?`, [id])
        return data
    } catch (error) {
        return error
    }
}

module.exports = {query, insert, del}