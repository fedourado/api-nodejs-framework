# API NODE.JS COM FRAMEWORK

Está é uma API teste que foi criada utilizando Node.js, framework Express.js e o banco de dados MongoDB. O projeto foi baseado no vídeo
"Crie uma API RESTful com Node.js e MongoDB | CRUD com Node, Express e Mongoose" do Matheus Battisti.


&nbsp;


## ⚙️ Configuração
Para usar a API, você precisa ter o Node.js e o MongoDB instalados em seu sistema. Depois de instalados, siga os seguintes passos:

1. Clone o repositório para sua máquina local.
2. Abra o terminal e navegue até o diretório do projeto.
3. Execute o comando `npm install` para instalar as dependências.
4. Crie um arquivo `.env` na raiz do projeto e configure as variáveis de ambiente necessárias:

```
USER_DB=<seu_user_do_mongodb>
USER_PASSWORD=<sua_senha_do_mongodb>
```
5. Execute o comando `npm start` para iniciar a API.


&nbsp;


## 📌 Endpoints
A API possui os seguintes endpoints:

### GET /person
* Retorna todos os usuários.

### GET /person/:id
* Retorna um usuário específico com base no ID fornecido.

### POST /person
* Cria um novo usuário.

### PATCH /person/:id
* Atualiza um usuário existente com base no ID fornecido.

### DELETE /person/:id
* Remove um usuário específico com base no ID fornecido.

&nbsp;

## 🖇️ Vídeo - Crie uma API RESTful com Node.js e MongoDB | CRUD com Node, Express e Mongoose
Vídeo utilizado como suporte para a criação da API.

* https://www.youtube.com/watch?v=K5QaTfE5ylk&t=2847s


&nbsp;


## 🛠️ Construído com

As ferramentas utilizadas para a criação dessa API:

* Express - Framework utilizada para a criação da API
* [Postman](https://www.postman.com/) - Ferramenta que dá suporte à documentação das requisições feitas pela API
* [MongoDB](https://www.mongodb.com/atlas/database) - Banco de dados





