const cryptoJS = require('crypto-js')
const CHAVE_SECRETA = 'lowkey'

function authmiddleware(req,res,next) {
    const token = req.headers ['authorization']
    console.log(token) 

    if(!token) {
        return res.status(401).json({mesassage: ' acesso negado'})
    }

    try{
        const bytes = cryptoJS.AES.decrypt(token, CHAVE_SECRETA)
        const dadosDescriptografados = bytes.toString(cryptoJS.enc.Utf8)

        if(!dadosDescriptografados){
            return res.status(401).json({message: 'token invalido'})
        }

        const payload = JSON.parse(dadosDescriptografados)

        if(Date.now() > payload.expiraEm) {
            return res.status(401).json({message: 'sessao expirada'})
        }
        req.usuario = payload
        next()
    }catch(err){
        return res.status(401).json({message: 'falha na autenticação'})
    }
}

module.exports = authmiddleware