const Controller = require('egg').Controller

class UsersController extends Controller {

    async index () {

        const { service, ctx } = this

        ctx.body = {
            users: await service.users.index()
        }
    }

    async show () {
        const { service, ctx } = this

        ctx.body = await service.users.show(ctx.params.id)
    }

}

module.exports = UsersController