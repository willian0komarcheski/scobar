// app.js

const express = require('express');
const Routes = require('./src/routes/Route');
const sequelize = require('./src/Config/DataBase');

const app = express();

// Middleware para interpretar o corpo das solicitações como JSON
app.use(express.json());

// Rotas de produtos
app.use('/api', Routes);

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
    console.log(`Servidor rodando na porta ${PORT}`);

    // Sincronizar o modelo com o banco de dados
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados estabelecida com sucesso.');
    } catch (error) {
        console.error('Erro ao conectar-se ao banco de dados:', error);
    }
});
