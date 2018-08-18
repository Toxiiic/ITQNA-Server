'use strict';

const Controller = require('egg').Controller;

class AuthController extends Controller {
    async authCallback () {
        // console.log('登陆成功')
        this.ctx.body = {
            success: true,
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
