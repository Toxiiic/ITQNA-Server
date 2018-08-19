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
        if (ctx.query.no_answer) {
            ctx.body = await service.questions.noAnswer()
        } else {
            ctx.body = await service.questions.index()
        }
    }

    async show () {
        this.ctx.body = await this.service.questions.show(this.ctx.params.id)
    }

}

module.exports = QuestionsController