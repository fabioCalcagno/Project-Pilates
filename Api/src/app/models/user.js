const mongoose = require('../../dataBase');
const bcrypt = require('bcryptjs');


const UserSchema = new mongoose.Schema({
    
    username: {
        type: String,
        require: true,
        lowercase: true,
        /* unique: true, */
    },
    password: { 
        type: String,
        required: true,
        select: false,
    },

    passwordResetToken: {
        type: String,
        select: false,
    },
    
    passwordResetExpires: {
        type: Date,
        select: false,


    },
    createdAt: {
        type: Date,
        default: Date.now,

    },

});


UserSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10);
        this.password = hash;

        next();
    });


const User = mongoose.model('User', UserSchema);

module.exports  = User;
