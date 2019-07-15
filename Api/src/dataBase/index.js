const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/client' ,{ useNewUrlParser: true }  );
mongoose.Promise= global.Promise;

module.exports = mongoose;

