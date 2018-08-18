
const Service = require('egg').Service

class QuestionsService extends Service {
    async create () {
        let result = await this.app.mysql.insert('question', this.ctx.request.body)
        return result.insertId
    }

    async find (id) {
        const { ctx, app } = this
        let qs = await app.mysql.get('question', { id: id })
        // console.log('打印session ', ctx.session)
        // ctx.cookies.set('egg_cookie_trial', 'oh yeah oh yeah')
        // ctx.session.in_controller_amount = ctx.session.in_controller_amount ? ctx.session.in_controller_amount+1 : 1
        // console.log('~controller', ctx.session.in_controller_amount)
        
        return qs
    }

}

module.exports = QuestionsService