'use strict';

const Controller = require('egg').Controller;

class UseViewController extends Controller {
    async hello () {
        const { ctx } = this;
        //访问view/hello.html
        await ctx.render('hello.html', {
            id: 2022,//传到view/hello.html上
            name: "超人强",
            age: 999,
            skill: "超人",
            id2: 3003,
            skills: [
                "毒龙",
                "倒立天女",
                "观音坐莲"
            ]

        });
    }
    async publicUse(){
        const {ctx} = this;
        await ctx.render('publicUse.html');
    }
}

module.exports = UseViewController;
