/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1670068509044_8501';

  // add your middleware config here
  config.middleware = [];

  config.security={
    csrf:{
      //当你第一次请求时，可能会返回403错误，这是因为Egg.js默认开启了CSRF安全策略，学习阶段，我们可以关闭掉这个选项
      enable:false,
      // CSRF的全名为 Cross-site request forgery， 它的中文名为 伪造跨站请求
    }
  }
  config.view = {
    mapping : {
      ".html":"ejs"
    }
  };
  //默认去用plugin.js里的相同项
  config.ejs={
    
  }
// config.sequelize = {
//   dialect: 'mysql',
//   host: '127.0.0.1',
//   port: 3306,              all errors
//   database: 'tryeggjs',
//   username: 'root',
//   password: '123456',
// }
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
