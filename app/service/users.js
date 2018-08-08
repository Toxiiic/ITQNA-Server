
const Service = require('egg').Service

class UsersService extends Service {
    async create () {
        
    }

    async find (id) {
        const { ctx, app } = this
        let users = await app.mysql.get('user', { id: id })
        console.log('users ', users)
        return users
    }
}

module.exports = UsersService