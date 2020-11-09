// importar dependencia express
const pages = require('./pages.js')
const express= require('express')
//importar o path para unir o dirname com a views
const path = require('path')

//iniciando o express
const server= express()

//utilizar arquivos staticos
server
.use(express.static('public'))
//utilizar body do req
.use(express.urlencoded({extended:true}))
// configurar template engine
.set('views', path.join(__dirname,"views"))
.set('view engine', 'hbs')



//criar uma rota no express
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage',pages.saveOrphanage)
//ligar o servidor 

server.listen(5500)