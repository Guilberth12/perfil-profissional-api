require("dotenv").config()
const api = require("./server")
const port = process.env.PORT || 3000

api.listen(port, () => {
    console.log(`Perfil Profissional API rodando na porta ${port} ...`)
})
