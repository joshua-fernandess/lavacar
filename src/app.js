import express from 'express';
import connectDB from './config/db.js'
import clientesRouter from './routers/clienteRouter.js';
import servicosRouter from './routers/servicoRouter.js';
import veiculosRouter from './routers/veiculoRouter.js';

connectDB();

const app = express();
app.use(express.json());

app.use('/clientes', clientesRouter);
app.use('/servicos', servicosRouter);
app.use('/veiculos', veiculosRouter);

app.listen(3000, () => console.log('Server running on port 3000'));

