const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const routes = require('./routes/products.routes')

app.use('/api', routes)
app.listen(3001, () => {
    console.log('Servidor Anda ok');
})
