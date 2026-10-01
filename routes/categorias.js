const express = require('express');
const router = express.Router();

const { Categoria } = require('../models');

// Listar todas as categorias
router.get('/', async (req, res) => {
  const categorias = await Categoria.findAll();

  res.render('categorias/index', {
    categorias
  });
});

// Formulário para nova categoria
router.get('/novo', (req, res) => {
  res.render('categorias/novo');
});

// Criar categoria
router.post('/', async (req, res) => {
  await Categoria.create(req.body);

  res.redirect('/categorias');
});

// Formulário para editar categoria
router.get('/:id/editar', async (req, res) => {
  const categoria = await Categoria.findByPk(req.params.id);

  res.render('categorias/editar', {
    categoria
  });
});

// Atualizar categoria
router.post('/:id', async (req, res) => {
  await Categoria.update(req.body, {
    where: {
      id: req.params.id
    }
  });

  res.redirect('/categorias');
});

// Deletar categoria
router.post('/:id/deletar', async (req, res) => {
  await Categoria.destroy({
    where: {
      id: req.params.id
    }
  });

  res.redirect('/categorias');
});

module.exports = router;
