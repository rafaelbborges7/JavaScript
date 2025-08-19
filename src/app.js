import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'; 
import livroRoutes from './routes/livroRoutes.js';
import { sequelize } from './database/connection.js';

const app = express();
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api', livroRoutes);

const PORT = 3000;

(async () => {
  try {
    await sequelize.sync(); // Garante que modelo e tabela estejam alinhados
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Erro ao sincronizar banco:', err);
  }
})();
