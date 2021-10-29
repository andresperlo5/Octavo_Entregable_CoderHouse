const express = require('express')
const router = express.Router()
const knex = require('../knexfile')

router.get('/', (req, res) => {
    knex
        .from('product')
        .select('*')
        .orderBy('id', 'desc')
        .then((data) => {
            res.json({ msg: 'Productos en Base de Datos', data })
        })
        .catch((err) => {
            console.log(err);
        })
})

router.get('/:id', (req, res) => {
    knex
        .from('product')
        .select('*')
        .where({ id: req.params.id })
        .then((data) => {
            res.json({ msg: 'Productos Encontrado', data })
        })
        .catch((err) => {
            console.log(err);
        })
})

router.post('/', (req, res) => {

    const { title, price, thumbnail } = req.body
    const obj = {
        title,
        price,
        thumbnail
    }

    knex('product')
        .insert(obj)
        .then((data) => {
            res.json({ msg: 'Producto Creado' })
        })
        .catch((err) => {
            console.log(err);
        })
})

module.exports = router
