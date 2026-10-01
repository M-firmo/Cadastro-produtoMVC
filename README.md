# Cadastro de Produtos — MVC

## Integrante

Murilo — RM (preencher)

## Como executar

Instale as dependências:

```bash
npm install
```

Execute o sistema:

```bash
npm start
```

Acesse no navegador:

```
http://localhost:3000/produtos
```

## Funcionalidades

- Cadastro de produtos
- Listagem de produtos
- Edição de produtos
- Exclusão de produtos
- Cadastro de categorias
- Associação de produtos a categorias

## Desafios

### Desafio 1 — Categorias

Foi criado um novo Model chamado `Categoria` com os campos `id` e `nome`.

A associação entre `Categoria` e `Produto` foi feita utilizando os métodos `hasMany` e `belongsTo` do Sequelize, estabelecendo uma relação onde uma categoria pode ter muitos produtos e um produto pertence a uma categoria.

Uma chave estrangeira `CategoriaId` foi adicionada à tabela de produtos.

Foram criadas rotas e views para o CRUD completo de categorias (`/categorias`).

Os formulários de criação e edição de produtos agora incluem um campo de seleção (dropdown) para escolher a categoria, e a listagem de produtos exibe a categoria associada a cada produto.
