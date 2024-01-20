import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (_request, response) => {
  response.send("Product Management UP");
});

export default app;
