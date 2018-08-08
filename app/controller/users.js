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

        ctx.body = {
            users: await service.users.find(ctx.params.id)
        }
    }

    async authCallback () {
        console.log('登陆成功，这时应渲染马上跳转的页面')
    }
}

module.exports = UsersController