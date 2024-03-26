const bcrypt = require("bcrypt")
const perfilModel = require("./../models/Perfil")

module.exports = {
    buscarUltimos: async () => {
        try {
            return await perfilModel.find().sort({ _id: -1 }).limit(5)
        } catch (error) {
            throw { message: error.message, status: 500 }
        }
    },
    buscarPorId: async (id) => {
        try {
            return await perfilModel.findOne({ _id: id })
        } catch (error) {
            throw { message: error.message, status: 500 }
        }
    },
    cadastrar: async (perfil) => {
        try {
            perfil.usuario.senha = await bcrypt.hash(perfil.usuario.senha, 10)

            let novoPerfil = await perfilModel.create(perfil)
            novoPerfil.usuario.senha = undefined

            return novoPerfil
        } catch (error) {
            throw { message: error.message, status: 500 }

        }
    },
    editar: async (id, perfil) => {
        try {
            return await perfilModel.updateOne({ _id: id }, perfil)
        } catch (error) {
            throw { message: error.message, status: 500 }
        }
    },
    conectar: async (info) => {
        try {
            let remetente = await perfilModel.findOne({ _id: info.remetente })
            let destinatario = await perfilModel.findOne({ _id: info.destinatario })

            if (!remetente || !destinatario) {
                throw { message: "Perfil não encontrado", status: 404 }
            } else {
                remetente.conexoes.push(destinatario)
                destinatario.conexoes.push(remetente)

                await perfilModel.updateOne({ _id: remetente._id }, remetente)
                await perfilModel.updateOne({ _id: destinatario._id }, destinatario)
            }

            return { mensagem: "Conexão estabelecida com sucesso!", status: 200 }
        } catch (error) {
            throw { message: error.message, status: 500 }
        }
    }
}
