const express = require('express');
const router = express.Router();

const { Produto, Categoria } = require('../models');

// Listar todos os produtos com suas categorias
router.get('/', async (req, res) => {
  const produtos = await Produto.findAll({
    include: { model: Categoria, as: 'categoria' }
  });

  res.render('produtos/index', {
    produtos
  });
});

// Formulário para novo produto
router.get('/novo', async (req, res) => {
  const categorias = await Categoria.findAll();

  res.render('produtos/novo', {
    categorias
  });
});

// Criar produto
router.post('/', async (req, res) => {
  // Se "Sem categoria" for selecionado, o valor vem vazio. 
  // O banco de dados (SQLite) precisa que seja 'null' para não dar erro de Chave Estrangeira.
  if (req.body.CategoriaId === '') {
    req.body.CategoriaId = null;
  }
  
  await Produto.create(req.body);

  res.redirect('/produtos');
});

// Formulário para editar produto
router.get('/:id/editar', async (req, res) => {
  const produto = await Produto.findByPk(req.params.id, {
    include: { model: Categoria, as: 'categoria' }
  });

  const categorias = await Categoria.findAll();

  res.render('produtos/editar', {
    produto,
    categorias
  });
});

// Atualizar produto
router.post('/:id', async (req, res) => {
  if (req.body.CategoriaId === '') {
    req.body.CategoriaId = null;
  }

  await Produto.update(req.body, {
    where: {
      id: req.params.id
    }
  });

  res.redirect('/produtos');
});

// Deletar produto
router.post('/:id/deletar', async (req, res) => {
  await Produto.destroy({
    where: {
      id: req.params.id
    }
  });

  res.redirect('/produtos');
});

module.exports = router;
