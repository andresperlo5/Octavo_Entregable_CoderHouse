const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)
const port = process.env.PORT || 3002
const morgan = require('morgan')
const routerRoutes = require('./routes/index.Routes')

const knex = require('./knexfile')
const produts = require('./DB/db.sequelize')

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/api', routerRoutes)

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

let msn;
let table;

async function asd() {
    let ad2 = await knex
        .from('posts')
        .select('*')
        .orderBy('id', 'desc')
    msn = ad2

}

asd()

async function tableprod(){
   let prod = await produts.findAll()
   table = prod
}

tableprod()


io.on("connection", (socket) => {
    
    console.log("Usuario Conectado!");
    socket.emit("message_back", msn);
    socket.emit("message_back_table", table);
    socket.on("message_client", (data) => {
        console.log('dataFront', data);
    });

    socket.on("message_client_table", (data) => {
        console.log(data);
    });

    socket.on("data_client", (data) => {

        console.log('data', data);

        let objMessage = {
            email: data.email,
            message: data.message
        };

        knex('posts')
            .insert(objMessage)
            .then(() => {
                console.log('Mensaje Guardado');
            })
            .catch((err) => {
                console.log('err', err);
            })
        /* socket.emit("message_back", msn); */

        io.sockets.emit("message_back", msn)
    })

    socket.on("data_client_table", (data) => {
        console.log('dataTable', data);

        produts.create({
            title: data.title,
            price: data.price,
            thumbnail: data.thumbnail
        })

        /* socket.emit("message_back", msn); */
        io.sockets.emit("message_back_table", table)
    });
});

server.listen(port, () => {
    console.log('Servidor Andando en el puerto: ', port);
})
