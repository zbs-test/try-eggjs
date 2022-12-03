'use strict';

const Controller = require('egg').Controller;

class UseSomeController extends Controller {
    //使用some的service
    async getSome () {
        const { ctx } = this;
        let para = ctx.query.id;
        const res = await ctx.service.some.getId(para);
        ctx.body = res;
    }
}

module.exports = UseSomeController;
