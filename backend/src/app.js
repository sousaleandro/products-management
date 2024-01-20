import express from 'express';
import cors from 'cors';
import productRoutes from './routes/product.routes.js';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (_request, response) => {
  response.send("Product Management UP");
});

app.use('/products', productRoutes);

export default app;
