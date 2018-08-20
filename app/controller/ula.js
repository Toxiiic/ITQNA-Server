const Controller = require('egg').Controller

class UlaController extends Controller {
    async create () {
        let id = await this.service.ula.create()
        if(id) {
            this.ctx.body = {
                id
            }
            this.ctx.status = 201
        }
    }

}

module.exports = UlaController