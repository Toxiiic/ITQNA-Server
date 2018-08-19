
const Service = require('egg').Service

const questionQuery = `select q.id qs_id, title, \`desc\`, ask_user_id, u.name user_name, u.motto user_motto, u.head_url user_head_url
from question q join user u on q.ask_user_id = u.id`

class QuestionsService extends Service {
    async create () {
        let result = await this.app.mysql.insert('question', this.ctx.request.body)
        return result.insertId
    }

    async show (id) {
        const { ctx, app } = this
        return await app.mysql.query(`${questionQuery} where q.id = ${id}`)
    }

    async index () {
        return await this.app.mysql.get('question')
    }
    async noAnswer () {
        return await this.app.mysql.query(`select qs_id, title, u.name user_name, u.motto user_motto, u.head_url user_head_url from
        (select * from
        (SELECT q.id qs_id, title, ask_user_id, a.id ans_id FROM question q left JOIN answer a ON q.id = a.question_id) r1
        where ans_id is null) r2
        join user u on r2.ask_user_id = u.id`)
    }

}

module.exports = QuestionsService