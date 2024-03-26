const tokenUtil = require("./../utils/TokenUtil")

module.exports = {
    verficar: (req, res, next) => {
        const token = req.headers.token

        if (token) {
            res.status(401).json({
                message: "Autenticação necessaria"
            })
        } else {
            try {
                tokenUtil.verificarToken(token)
                next()
            } catch (error) {
                res.status(error.status).json({
                    message: error.message
                })
            }
        }
    }
}

