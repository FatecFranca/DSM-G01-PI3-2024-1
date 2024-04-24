const mongoose = require('mongoose');

const conectarBancoDeDados = async () => {
    try {
        await mongoose.connect('SUA_URI_DE_CONEXAO_AQUI', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Conexão com o banco de dados estabelecida com sucesso!');
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
    }
};

module.exports = conectarBancoDeDados;
