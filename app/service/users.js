
const Service = require('egg').Service

class UsersService extends Service {
    async create () {
        
    }

    async find (id) {
        const { ctx, app } = this
        let users = await app.mysql.get('user', { id: id })
        console.log('打印session ', ctx.session.user)
        return users
    }
}

module.exports = UsersService