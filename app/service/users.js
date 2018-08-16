
const Service = require('egg').Service

class UsersService extends Service {
    async create () {
        
    }

    async find (id) {
        const { ctx, app } = this
        let users = await app.mysql.get('user', { id: id })
        console.log('打印session ', ctx.session)
        ctx.cookies.set('egg_cookie_trial', 'oh yeah oh yeah')
        ctx.session.in_controller_amount = ctx.session.in_controller_amount ? ctx.session.in_controller_amount+1 : 1
        console.log('~controller', ctx.session.in_controller_amount)
        
        return users
    }
}

module.exports = UsersService