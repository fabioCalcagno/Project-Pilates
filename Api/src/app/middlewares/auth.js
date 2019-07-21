const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth');




module.exports = (req,resp,next) => {
    const authHeader = req.headers.authorization;


    if(!authHeader)
    return resp.status(401).send({ error: "token não informado" });


    const parts = authHeader.split(' ');

    if(!parts.lenght === 2)
    return resizeBy.status(401).send({ erros: "Erro de Token" });


    const [ scheme, token] = parts;

    if(!/^Bearer$/i.test(scheme))
        return resp.status(401).send({ error: " token mal formatado" });


        jwt.verify(token, authConfig.secret, (err,decoded)  => {
            if(err) return resp.status(401).send({ error: "token invalido " });
       
       
            req.userId = decoded.id;
            req.username = decoded.username;
            return next();
        });

};