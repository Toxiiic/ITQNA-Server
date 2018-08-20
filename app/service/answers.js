
const Service = require('egg').Service

/**
 * 
 * @param {string} whereQuery 传入的where从句，可为空
 * options.whereQuery
 * options.ulaTable
 * options.joinType
 */
const getAnswerQuery = (options) => {
    options.whereQuery = options.whereQuery || ''
    options.ulaTable = options.ulaTable || 'user_like_answer'
    options.join = options.join || 'right join'

    return `
        select 
        count(ula.user_id) as like_count, 
        a.id ans_id, a.content,
        q.id qs_id, q.title title,
        u.name user_name, u.motto user_motto, u.head_url user_head_url
        from ((
                        ${options.ulaTable} ula ${options.join} answer a on ula.answer_id = a.id
                )
                join question q on q.id = a.question_id
        )
        join user u on a.answer_user_id = u.id
        ${options.whereQuery}
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
        let answerQueryString = getAnswerQuery({ where: `where q.id = ${qsId}` })
        return await this.app.mysql.query(answerQueryString)
    }
    async likeUserId (userId) {
        let answerQueryString = getAnswerQuery({
            join: 'inner join',
            ulaTable: `(select * from user_like_answer where user_id = ${userId})`
        })
        return await this.app.mysql.query(answerQueryString)
    }
    async userId (userId) {
        let answerQueryString = getAnswerQuery({ where: `where a.answer_user_id = ${userId}` })
        return await this.app.mysql.query(answerQueryString)
    }

}

module.exports = AnswersService