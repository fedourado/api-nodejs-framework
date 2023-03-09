const router = require('express').Router()

// importa o Person e acessa ele através do models
const Person = require('../models/Person')

// CREATE - CRIAÇÃO DE DADOS

// Com esse personRoutes irá separar a regra de negócio do código, deixando ele mais clean
// rotas da API
// utiliza post pois irá enviar dados
// com req e res, iremos receber dados, transofrma-los em algo e enviar novamente
router.post('/', async (req, res) => {

    // tratar dados do body -> req.body

     // {name: "Fernanda", salary: 5000, approved: false}
    const {name, salary, approved} = req.body

    // é preciso fazer isso com todos os campos, para o sistema ficar consistente
    // colocar return, pois não executa mais a req 
    if(!name) {
        res.status(422).json({error: 'O nome é obrigatório'}) //status(422) erros eventuais no sistema, recurso não foi feito com sucesso
        return
    }

    const person = {
        name, 
        salary,
        approved
    }

    try {
        // create: cria dados do sistema
        await Person.create(person)

        res.status(201).json({ message: 'Pessoa inserida no sistema com sucesso!' }) //status(201) recurso criado com sucesso
    }catch (error) {
        res.status(500).json({ error: error }) // status(500) erro de servidor. Esse erro n é o melhor, pois aplica que a API está com falha
    }

})

// READ - LEITURA DE DADOS
router.get('/', async (req, res) => {

    try {

        const people = await Person.find() // Person.find() encontra o Person

        res.status(200).json(people) // status(200) deu tudo certo

    }catch (error) {
        res.status(500).json({ error: error })
    }
})

// leitura de dados de um usuário específico
router.get('/:id', async (req, res) => {
    console.log(req)
    
    // extrair dado da requisição, pela url = req.params
    const id = req.params.id

    try {

        const person = await Person.findOne({_id: id}) // Person.findOne({}) encontra o Person, porém uma pessoa especifica. 
        // Nesse caso dá para filtrar por parametros --> _id (MongoDB uso _ antes do id) e : id (ele irá procurar o id)

        if(!person) {
            res.status(422).json({message: 'O usuário não foi encontrado!'})
            return
        }

        res.status(200).json(person)
    }catch (error) {
        res.status(500).json({ error: error })
    }

})

// UPDATED - ATUALIZAÇÃO DE DADOS (PUT, PATCH)
router.patch('/:id', async(req, res) => {

    const id = req.params.id

    const { name, salary, approved } = req.body

    const person = {
        name,
        salary,
        approved
    }

    try {

        const updatePerson = await Person.updateOne({_id: id}, person) // atualiar apenas uma categoria de uma pessoa específica

        console.log(updatePerson)

        if(updatePerson.matchedCount === 0) {
            res.status(422).json({message: 'O usuário não foi encontrado!'})
            return
        } // matchadCount irá comparar se o updatePerson será identico a 0, se for ele manda a mensagem 

        res.status(200).json(person)
    }catch(error) {
        res.status(500).json({ error: error })
    }

})

// DELETE - DELETAR DADOS
router.delete('/:id', async(req, res) => {

    const id = req.params.id


    const person = await Person.findOne({_id: id}) // Person.findOne({}) encontra o Person, porém uma pessoa especifica. 
    // Nesse caso dá para filtrar por parametros --> _id (MongoDB uso _ antes do id) e : id (ele irá procurar o id)

    // faz a validação para ver se o usuário existe, pois não é possível deletar algo que não existe
    if(!person) {
        res.status(422).json({message: 'O usuário não foi encontrado!'})
        return
    }

    try {

        await Person.deleteOne({_id: id})

        res.status(200).json({ message: 'Usuário removido com sucesso!' })

    }catch(error) {
        res.status(500).json({ error: error})
    }



})

module.exports = router