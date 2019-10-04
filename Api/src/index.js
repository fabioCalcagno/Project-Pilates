
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

 app.use(cors()); 


app.use(function (req, res, next) {
 



 res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
 res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
 res.setHeader('Access-Control-Allow-Credentials', true);
 res.header('Access-Control-Expose-Headers', 'x-access-token');
 



 next();
})



require('./app/controllers/index')(app)

 app.listen(3003);



