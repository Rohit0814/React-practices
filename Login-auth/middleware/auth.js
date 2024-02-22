const auth = (req,res,next)=>{
    if(req.cookies.user_id===undefined){
        return res.redirect('back');
    }
    next();
}

module.exports = auth;