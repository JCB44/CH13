const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

router.get('/', (req, res) => {
  Tag.findAll({
    include: [
      {
        model: Product,
        through: ProductTag
      }
    ]
  })
  .then((data) => 
  res.status(200).json(data))
});

router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Product,
        through: ProductTag
      }
    ]
  })
  .then((data) => 
  res.status(200).json(data))
});

router.post('/', (req, res) => {
  Tag.create(req.body)
  .then((data) => 
  res.status(200).json(data))
});

router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then((data) => 
  res.status(200).json(data))
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  .then((data) => 
  res.status(200).json(data))
});

module.exports = router;