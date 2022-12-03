'use strict';

const Controller = require('egg').Controller;

class PostParaController extends Controller {
    //post请求必须post获得,不能用get来请求一个post接口
    async postPara () {
        const { ctx } = this;//this 指向本controller
        ctx.body = "你别向我post请求了，我已经满了哟，下次再让你进来";
    }
    //接收post参数
    async add () {
        const { ctx } = this;
        ctx.body = {
            status: 200,
            data: ctx.request.body
        };
    }
}

module.exports = PostParaController;
