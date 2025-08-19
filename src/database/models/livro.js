import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';

export const Livro = sequelize.define('Livro', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome_livro: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nome_autor: {
    type: DataTypes.STRING,
    allowNull: false
  }
},{
  tableName: 'livros',
  timestamps: false
});
