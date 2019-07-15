
const nodeMailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars'); 
const path = require ('path');

const {host, port, user, pass} = require('../config/mail.json');



const transport =  nodeMailer.createTransport({
    host,
    port,
    auth: { user  , pass },
  });

  transport.use('compile', hbs({
      viewEngine: 'handlebars',
      viewPath: path.resolve('./src/resources/auth/mail'),
      extName: 'html' , 
  }));

  module.exports = transport;