
const Service = require('egg').Service


class UlaService extends Service {
    async create () {
        let result = await this.app.mysql.insert('user_like_answer', this.ctx.request.body)
        return result.insertId
    }
}

module.exports = UlaService