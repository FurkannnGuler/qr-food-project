// backend/server.js
const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/product.routes');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api', productRoutes);

app.listen(port, () => {
    console.log(`Sunucu ${port} portunda çalışıyor.`);
});