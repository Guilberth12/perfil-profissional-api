const express = require("express")
const router = express.Router()
const loginService = require("./../services/LoginService")

router.post('', async (req, res) => {
    try {
        const resposta = await loginService.autenticar(req.body)
        res.json(resposta)
        
    } catch (error) {
        console.log(JSON.stringify(error));
        res.status(error.status).json({
            message: error.message
        })
    }
});

module.exports = router
