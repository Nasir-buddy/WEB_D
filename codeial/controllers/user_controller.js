module.exports.profile = (req, res)=>{
    return res.render('users_profile.ejs',{
        title: "Entered in users directory"
    })
}