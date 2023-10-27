module.exports.profile = (req, res)=>{
    return res.render('users.ejs',{
        title: "Entered in users directory"
    })
}