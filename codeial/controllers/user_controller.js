const User = require('../models/user')

module.exports.profile = (req, res)=>{
    return res.render('users_profile.ejs',{
        title: "Entered in users directory"
    })
}

//render the sign up page 
module.exports.signUp = function(req, res){
    return res.render('user_sign_up',{
        title: "Codeial | Sign Up"
    })
}

// render the sign in page
module.exports.singIn = function(req, res){
    return res.render('user_sign_in',{
        title: "Codeial | Sign In"
    })
}

//get the sign up data
module.exports.create = async (req, res)=>{
    if(req.body.password != req.body.confirm_password){
        return res.redirect('/users/sign-in');
    }
    try{
        const existingUser = await User.findOne({email: req.body.email});
        if(!existingUser){
            const user = await User.create(req.body);
            return res.redirect('/users/sign-in');
        } else {
            return res.redirect('back');
        }
    } catch {
        console.error("Error in finding/creating user while signing up", error);
        return res.redirect('back');
    }
};


// sign in and get the create session 
module.exports.createSession = function(req, res){
    // TODO later
}

