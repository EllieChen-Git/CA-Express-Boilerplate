const UserModel = require("./../database/models/user_model");

//view to register users
function registerNew (req, res){
    res.render("authentication/register")
} 

function registerCreate(req, res){

}

module.exports = {
    registerNew,
    registerCreate
}