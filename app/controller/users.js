const Controller = require('egg').Controller

class UsersController extends Controller {
    async create () {
        
    }

    async index () {

        const { service, ctx } = this

        ctx.body = {
            users: await service.users.index()
        }
    }

    async show () {
        const { service, ctx } = this
        console.log(ctx.headers.authorization)

        ctx.body = await service.users.find(ctx.params.id)
    }

}

module.exports = UsersController