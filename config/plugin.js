'use strict';

/** @type Egg.EggPlugin */

//启用ejs模板引擎，还要到defalut.js配置映射
exports.ejs = {
  enable: true,
  package: "egg-view-ejs"
}

// exports.sequelize = {
//   enable: true,              fuck
//   package: 'egg-sequelize',
// };
