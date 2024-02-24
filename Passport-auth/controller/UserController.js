module.exports.home = (req,res) =>{
    return res.render('home');
}

module.exports.sign_up=(req,res)=>{
    return res.render('registration');
}

module.exports.log_in = (req,res) => {
    return res.render('login');
}