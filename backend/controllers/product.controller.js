
const db = require('../database/db');

const getProductBySerialNumber = async (req, res) => {
    const serialNumber = req.params.serialNumber;

    try {
        const result = await db.query('SELECT * FROM products WHERE serial_number = $1', [serialNumber]);

        if (result.rows.length > 0) {
            res.json(result.rows[0]);
        } else {
            res.status(404).json({ message: 'Ürün bulunamadı.' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Sunucu hatası.' });
    }
};

module.exports = {
    getProductBySerialNumber,
};