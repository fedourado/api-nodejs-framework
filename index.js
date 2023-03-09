// config inicial - chamar pacotes para poder utilizar
// no node.js pode usar o "require" para importar arquivos
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
// executar o express como função
const app = express()


// forma de ler JSON (usando middlewares -> são recursos que ão executados entre as requisições e respostas)
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

// rotas da API
// Com esse personRoutes irá separar a regra de negócio do código, deixando ele mais clean
// chamando o personRoutes irá conectar esse arquivo com o main, além disso, com o app.use tudo que vier de /person irá para o arquivo 
// personRoutes
const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)


// rota inicial (endpoint inicial)
// criar um get para visualizar coisas. A rota '/' vai disponibilizar algo que for escrito e com REQ irá ser possível captar infos enviadas
// pelo usuário e com o RES será possível responder.
app.get('/', (req, res) => {

    // mostrar requisição (req)

    res.json({ message: 'Oi Express!' })
})

// mongodb+srv://fernandadouradoms:VGTJm1UfGx3Msw1V@clusterapi.mm5b63z.mongodb.net/?retryWrites=true&w=majority

// entregar uma porta para que o express possa disponibilizar a aplicação para acessar o código
// listen irá disponibilizar o express na porta 3000
const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@clusterapi.mm5b63z.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {
    console.log("Conectamos ao MongoDB!")
    app.listen(3000)

}) // quando a conexão da certo
.catch((err) => console.log(err)) // quando a conexão da errado e quer exbir esse erro


