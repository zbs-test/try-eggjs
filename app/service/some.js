'use strict';

const Service = require('egg').Service;

class SomeService extends Service {

    //因为没有真实连接数据库，所以模拟数据
    async getId (id) {
        return {
            id: id,
            name: "小红",
            age: 18,
        }
    }
}

module.exports = SomeService;
