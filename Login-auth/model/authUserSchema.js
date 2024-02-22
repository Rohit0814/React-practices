const moongoes = require('mongoose');

const userSchema = new moongoes.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type:String,
        require:true
    }
},
{
    timestamps:true,
}
)

const User=moongoes.model('User',userSchema);
module.exports = User;