const mysql = require('mysql')

const conn = mysql.createPool({
    host:   "localhost",
    user:   "root",
    password:   "",
    database:   "db_gabung",
    charset: "utf8mb4",
    timezone: "+07:00"
});

conn.getConnection((err) => {
    if (err) throw err
    console.log('Koneksi Berhasil')
});
module.exports = conn;