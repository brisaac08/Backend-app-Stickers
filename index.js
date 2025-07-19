const express = require('express');
const cors = require('cors');
require('dotenv').config();

const facturaRouter = require('./routes/factura.routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/factura', facturaRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor Backend corriendo en el puerto ${PORT}`);
}); 