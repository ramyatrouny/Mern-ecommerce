import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDb from './config/db.js';

import productRoutes from './routes/routes.js';

dotenv.config();
connectDb();
const app = express();

app.get('/', (req, res) => {
    res.send('Api is running');
});

app.use('/api/products', productRoutes);

app.listen(process.env.PORT,
    console.log(`Server is running in ${process.env.NODE_ENV} on PORT ${process.env.PORT}`.yellow.bold));