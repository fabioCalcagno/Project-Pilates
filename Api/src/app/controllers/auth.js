const express = require('express');
const User = require('../models/user');
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth');
const crypto = require('crypto');
const mailer = require('../../modules/mailer');
//const authMidleware = require('../middlewares/auth');


function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    });
}



router.post('/register', async (req, resp) => {
    const { username } = req.body;

    try {
        if (await User.findOne({ username }))
            return resp.status(400).send({ error: "Usuario ja existe! " });

        const user = await User.create(req.body);
        console.log("usuario criado ->", user);

        user.password = undefined;
        user.save();



        return resp.send({
            user,
            token: generateToken({ id: user.id }, { name: user.username }),

        });


    } catch (error) {
        return resp.status(400).send({ error: " Falha ao Registrar, usuario já existente " });
    }
});


router.post('/autenticate', async (req, resp) => {

    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username }).select('+password');


        if (!user)
            return resp.status(400).send({ error: 'Usuario não enontrado' });

        if (!await bcrypt.compare(password, user.password))
            return resp.status(400).send({ error: ' Senha Incorreta ' });

        user.password = undefined;
        return resp.send({
            user,
            token: generateToken({ id: user.id, username: user.username }),
        })

    } catch (error) {

        return resp.status(400).send({ error: 'User not found!!!' + error });
    }
});

router.post('/forgot_password', async (req, resp) => {
    const { username } = req.body;

    try {
        const user = await User.findOne({ username });

        if (!user)
            return resp.status(400).send({ error: 'Usuario não enontrado' + error });

        const token = crypto.randomBytes(20).toString('hex');

        const now = new Date();
        now.setHours = (now.getHours() + 1);

        await User.findByIdAndUpdate(user.id, {
            '$set': {
                passwordResetToken: token,
                passwordResetExpires: now,
            }
        });

        mailer.sendMail({
            to: username,
            from: 'fabio.calcagno@ska.com.br',
            template: 'auth/forgot_password',
            context: { token },

        }, (error) => {
            if (error)
                return resp.status(400).send({ error: 'Cannot send forgot password email' });

            return resp.send(); console.log("200");
        })



    } catch (error) {
        resp.status(400).send({ error: 'Error on forgot password, Try again' });
    }
});



router.post('/reset_password', async (req, resp) => {
    const { username, token, password } = req.body;

    try {
        const user = await User.findOne({ username })
            .select('+passwordResetToken passwordResetExpires');

        if (!user)
            return resp.status(400).send({ error: 'Usuario não enontrado' + error });

        if (token !== user.passswordResetToken)
            return resp.status(400).send({ error: 'Token Inválido' });

        const now = new Date();

        if (now > user.passswordResetExpires)
            return resp.status(400).send({ error: 'o token expirou, gere um novo token ' });


        user.password = password;

        await user.save();

        resp.send();


    } catch (error) {
        resp.status(400).send({ error: "cannot reset password, Try again" });
    }
})


module.exports = app => app.use('/auth', router);