const mongoose = require("mongoose")
require("dotenv").config()
const currentEnv = process.env


const URI = `${currentEnv.DB_PROTOCOL}://${currentEnv.DB_USER}:${currentEnv.DB_PASSWORD}@${currentEnv.DB_HOST}/${currentEnv.DB_NAME}?${currentEnv.DB_OPTIONS} `

let db

module.exports = {
    connect: async () => {
        console.log ("Tentanto comunicar com banco: ${}")
        db = await mongoose.connect(URI)
        console.log("Conexão com o banco de dados estabelecida com sucesso!")
    },

    getDB: () => {
        return db
    }
}

