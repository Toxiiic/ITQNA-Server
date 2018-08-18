const LocalStrategy = require('passport-local').Strategy

module.exports = app => {

    app.passport.use(new LocalStrategy({ passReqToCallback: true }, (req, username, password, done) => {
        let user = {
            provider: 'local',
            username,
            password
        }
        console.log('打印打印 %s %s get user: %j', req.method, req.url, user)
        app.passport.doVerify(req, user, done)
        // req.ctx.userId = 'useridid'
        // done(null, user)
        // ctx.session.in_app_amount = ctx.session.in_app_amount ? ctx.session.in_app_amount+1 : 1
        // console.log('~app：', ctx.session.in_app_amount)
    }))

    app.passport.verify(async (ctx, user) => {
        // assert(user.provider, 'user.provider 应该有，现在木有')
        // assert(user.id, 'user.id 应该有，现在木有')
        
        //TODO finduser
        let existsUser = await ctx.service.users.findByNamePwd(user.username, user.password)
        if(existsUser) {
            return existsUser
        } else {
            //TODO ?
            return false
        }
    })
    app.passport.serializeUser(async (ctx, user) => {
        return user
    })
    app.passport.deserializeUser(async (ctx, user) => {
        return user
    })


}