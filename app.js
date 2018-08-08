const LocalStrategy = require('passport-local').Strategy

module.exports = app => {

    app.passport.use(new LocalStrategy({ passReqToCallback }), (req, username, password, done) => {
        let user = {
            provider: 'local',
            username,
            password
        }
        app.passport.doVerify(req, user, done)
    })

    app.passport.verify(async (ctx, user) => {
        // assert(user.provider, 'user.provider 应该有，现在木有')
        // assert(user.id, 'user.id 应该有，现在木有')
        return user
    })
    app.passport.serializeUser(async (ctx, user) => {
        return user
    })
    app.passport.deserializeUser(async (ctx, user) => {
        return user
    })


}