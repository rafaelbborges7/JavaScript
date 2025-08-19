import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('biblioteca', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

try {
  await sequelize.authenticate();
  console.log('Conectado ao MySQL via Sequelize!');
} catch (error) {
  console.error('Erro ao conectar:', error);
}
