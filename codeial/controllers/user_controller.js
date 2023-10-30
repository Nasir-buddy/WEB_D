const User = require('../models/user')

module.exports.profile = async (req, res) => {
    try {
        // trying to find the user
        if (req.cookies.user_id) {
            // finding by user id 
            const user = await User.findById(req.cookies.user_id);
            // if we found the user the we redirecting the page to the user profile 
            if (user) {
                return res.render('users_profile', {
                    title: "User Profile",
                    user: user
                });
            }
        }
        // other wise we are redirecting to the sign in page in both of the cases
        // return res.redirect('/users/sign-in');
    } catch (err) {
        console.error('Error in finding user by ID:', err);
        return res.redirect('/users/sign-in');
    }
};


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
    // checking the password is same or not if not then return to sign in page 
    if(req.body.password != req.body.confirm_password){
        return res.redirect('/users/sign-in');
    }
    // other wise we try to create new user
    try{
        // finding the user id by email
        const existingUser = await User.findOne({email: req.body.email});
        // if the user is not existing then 
        if(!existingUser){
            // creating the user 
            const user = await User.create(req.body);
            // and redirect to rhe sign in page
            return res.redirect('/users/sign-in');
        } else {
            // otherwise returning back to the main page 
            return res.redirect('back');
        }
    } catch {
        // catching the error in the creating contact 
        console.error("Error in finding/creating user while signing up", error);
        //and returing to the main page 
        return res.redirect('back');
    }
};


// sign in and get the create session 
module.exports.createSession = async (req, res)=>{
   try{
    const user = await User.findOne({email: req.body.email});

    if(user){
        if(user.password != req.body.password){
            return res.redirect('back');
        }
        res.cookie('user_id', user.id);
        return res.redirect('/users/profile');
    } else {
        return res.redirect('back');
    }
   } catch (err){
    console.err('Error in finding user in signing in.', err);
    return res.redirect('back');
   }
};
