const Controller = require('egg').Controller

class AnswersController extends Controller {
    async create () {
        let id = await this.service.answers.create()
        if(id) {
            this.ctx.body = {
                id
            }
            this.ctx.status = 201
        }
    }

    async index () {
        const { service, ctx } = this

        let qsId = ctx.query.qs_id
        if(qsId) {
            ctx.body = await service.answers.qsId(qsId)
        } else {
            ctx.body = await service.answers.index()
        }
    }
    
    async show () {
        // const { service, ctx } = this
        // console.log(ctx.headers.authorization)

        // ctx.body = await service.questions.find(ctx.params.id)
    }

}

module.exports = AnswersController