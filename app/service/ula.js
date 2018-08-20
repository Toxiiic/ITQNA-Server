
const Service = require('egg').Service

// const answerQuery = `select title, a.id ans_id, q.id qs_id, content, u.name user_name, motto user_motto, head_url user_head_url
// from (answer a join question q on q.id = a.question_id)
// join user u on a.answer_user_id = u.id`
/**
 * 
 * @param {string} whereQuery 传入的where从句，可为空
 */
const getAnswerQuery = (whereQuery = '') => {
    return `
    select 
    count(ula.user_id) as like_count, 
    a.id ans_id, a.content,
    q.id qs_id, q.title title,
    u.name user_name, u.motto user_motto, u.head_url user_head_url
    from ((
                    user_like_answer ula right join answer a on ula.answer_id = a.id
            )
            join question q on q.id = a.question_id
    )
    join user u on a.answer_user_id = u.id
    ${whereQuery}
    group by ans_id`
}

class AnswersService extends Service {
    async create () {
        let result = await this.app.mysql.insert('answer', this.ctx.request.body)
        return result.insertId
    }

    async find (id) {
        return await this.app.mysql.get('answer', { id: id })
    }

    async index () {
        return await this.app.mysql.query(getAnswerQuery())
    }
    async qsId (qsId) {
        let answerQueryString = getAnswerQuery(`where q.id = ${qsId}`)
        return await this.app.mysql.query(answerQueryString)
    }

}

module.exports = AnswersService