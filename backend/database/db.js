
require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

pool.connect()
    .then(() => {
        console.log('Veritabanına başarıyla bağlandı!'); 
    })
    .catch((err) => {
        console.error('Veritabanı bağlantı hatası:', err); 
    });

module.exports = pool;