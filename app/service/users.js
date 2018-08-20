
const Service = require('egg').Service

class UsersService extends Service {
    async create () {
        let result = await this.app.mysql.insert('user', this.ctx.request.body)
        return result.insertId
    }

    async find (id) {
        const { ctx, app } = this
        let user = await app.mysql.get('user', { id: id })
        // console.log('打印session ', ctx.session)
        // ctx.cookies.set('egg_cookie_trial', 'oh yeah oh yeah')
        // ctx.session.in_controller_amount = ctx.session.in_controller_amount ? ctx.session.in_controller_amount+1 : 1
        // console.log('~controller', ctx.session.in_controller_amount)
        
        return user
    }

    async findByNamePwd (name, password) {
        return await this.app.mysql.get('user', {name, password})
    }
}

module.exports = UsersService