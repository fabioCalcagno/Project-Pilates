const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth.json');




module.exports = (req, resp, next) => {
    const authHeader= req.headers.authorization;
    console.log('porrraaaa', req.headers.authorization)

    if (authHeader == undefined)
        return resp.status(401).send("token não informado" );


    const parts = authHeader.split(' ');

    if (!parts.lenght === 2)
        return resp.status(401).send({ erros: "Erro de Token" });


    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) // i -> case insensitive
        return resp.status(401).send({ error: " token mal formatado" });


    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err) {
        return resp.status(401).send({err :  "token invalido " });
            }
            req.userId = decoded.id;
            req.username = decoded.username;
            console.log('entrou no authMidleware ', req.userId)
            return next();
        });

};