require("dotenv").config()
const jwt = require("jsonwebtoken")

module.exports = {
    gerarToken: (usuario) => {
        try {
            return jwt.sign(usuario, process.env.SECRET)
        } catch (error) {
            console.log("ERRO: ${error.message}");
            throw {
                status: 500,
                message: "Erro na geração do token"
            }
        }
    },

    verificarToken: (token) => {
        try {
            return jwt.verify(token, process.env.SECRET)
        } catch (error) {
            console.log("ERRO: ${error.message}");
            throw {
                status: 500,
                message: "Erro ao autenticar: Token Inválido"
            }
        }
    }
}