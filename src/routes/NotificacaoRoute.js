const express = require("express")
const router = express.Router()
const {
    verificar,
    verficar
} = require("./../middlewares/AutenticacaoMiddleware")
const notificacaoService = require("./../services/NotificacaoService")

router.get("/:id", verficar, async (req, res) => {
    try {
        const resposta = await notificacaoService.buscarPorId(req.params.id)
        res.json(resposta)
    } catch (error) {
        console.log(JSON.stringify(error));
        res.status(error.status).json({
            message: error.message
        })
    }
});
router.get("/perfil/:id", verficar, async (req, res) => {
    try {
        const resposta = await notificacaoService.cadastrar(req.body)
        res.json(resposta)
    } catch (error) {
        console.log(JSON.stringify(error));
        res.status(error.status).json({
            message: error.message
        })
    }
});
router.post("", verficar, async (req, res) => {
    try {
        const resposta = await notificacaoService.buscarPorPerfilId(req.params.id)
        res.json(resposta)
    } catch (error) {
        console.log(JSON.stringify(error));
        res.status(error.status).json({
            message: error.message
        })
    }
});
router.put("/lida/:id", verficar, async (req, res) => {
    try {
        const resposta = await notificacaoService.marcarLida(req.params.id)
        res.json(resposta)
    } catch (error) {
        console.log(JSON.stringify(error));
        res.status(error.status).json({
            message: error.message
        })
    }
});

module.exports = router