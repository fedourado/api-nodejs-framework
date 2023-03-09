const mongoose = require('mongoose')

// chama Person como função e adiciona 3 campos para o banco de dados
const Person = mongoose.model('Person', {
    name: String, 
    salary: Number,
    approved: Boolean,
})

module.exports = Person