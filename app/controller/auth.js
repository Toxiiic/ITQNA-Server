'use strict';

const Controller = require('egg').Controller;

class AuthController extends Controller {

    async register () {
        //先创建用户
        let id = await this.service.users.create()

        if(id) {
            this.ctx.body = {
                userId: id,
                token: this.app.jwt.sign(id, this.app.config.jwt.secret)
            }
            // this.ctx.status = 201
        }
    }

    async authCallback () {
        // console.log('登陆成功')
        this.ctx.body = {
            userId: this.ctx.user.id,
            token: this.app.jwt.sign(this.ctx.user.id, this.app.config.jwt.secret)
        }
    }
    async verifyToken () {
        try {
            let decodedId = this.app.jwt.verify(this.ctx.headers.token, this.app.config.jwt.secret)
            this.ctx.body = {
                valid: true,
                id: decodedId
            }
        } catch (err) {
            this.ctx.body = { valid: false }
        }
    }
}

module.exports = AuthController;
