const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    include: [Product]})
    .then((results) => res.json(results))
});

router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [Product]
  })
  .then((result) => res.json(result))
});

router.post('/', (req, res) => {
  Category.create(req.body)
  .then((newCategory) => res.status(200).json(newCategory))
});

router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id
    },
  })
  .then((binary) => res.status(200).json(binary))
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    },
  })
  .then((binary) => res.status(200).json(binary))
});

module.exports = router;
