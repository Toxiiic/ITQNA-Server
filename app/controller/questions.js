const Controller = require('egg').Controller

class QuestionsController extends Controller {
    async create () {
        let id = await this.service.questions.create()
        if(id) {
            this.ctx.body = {
                id
            }
            this.ctx.status = 201
        }
    }

    async index () {

        const { service, ctx } = this

        ctx.body = await service.users.index()
    }

    async show () {
        // const { service, ctx } = this
        // console.log(ctx.headers.authorization)

        // ctx.body = await service.questions.find(ctx.params.id)
    }

}

module.exports = QuestionsController