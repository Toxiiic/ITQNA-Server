
const Service = require('egg').Service

const answerQuery = `select title, a.id ans_id, q.id qs_id, content, u.name user_name, motto user_motto, head_url user_head_url
from (answer a join question q on q.id = a.question_id)
join user u on a.answer_user_id = u.id`

class AnswersService extends Service {
    async create () {
        let result = await this.app.mysql.insert('answer', this.ctx.request.body)
        return result.insertId
    }

    async find (id) {
        return await this.app.mysql.get('answer', { id: id })
    }

    async index () {
        return await this.app.mysql.query(answerQuery)
    }
    async qsId (qsId) {
        let queryString = `${answerQuery} where q.id = ${qsId}`
        return await this.app.mysql.query(queryString)
    }

}

module.exports = AnswersService