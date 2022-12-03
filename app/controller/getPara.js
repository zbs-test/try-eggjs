'use strict';

const Controller = require('egg').Controller;

class GetparaController extends Controller {
    //获得get传参
    async getPara () {
        const { ctx } = this;
        ctx.body = ctx.query;
    }
    async getStrictPara () {
        const { ctx } = this;
        let name = ctx.params.name;
        let age = ctx.params.age;

        ctx.body = `我是${name}，${age}岁`;
    }
}

module.exports = GetparaController;
