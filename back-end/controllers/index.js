module.exports = {
    getUsers: (ctx) => {
        let session = ctx.session;
        if(!session.isLogin){
            ctx.redirect('/users');
            return;
        }
    }
}