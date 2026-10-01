const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  logging: false
});

const Produto = sequelize.define('Produto', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },

  preco: {
    type: DataTypes.FLOAT,
    allowNull: false
  },

  quantidade: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
});

const Categoria = sequelize.define('Categoria', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  freezeTableName: true
});

// Associações
Categoria.hasMany(Produto, { foreignKey: 'CategoriaId', as: 'produtos' });
Produto.belongsTo(Categoria, { foreignKey: 'CategoriaId', as: 'categoria' });

module.exports = {
  sequelize,
  Produto,
  Categoria
};
