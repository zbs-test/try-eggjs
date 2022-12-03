'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/getPara', controller.getPara.getPara);
  router.get('/getStrictPara/:name/:age', controller.getPara.getStrictPara);
  router.post('/postPara', controller.postPara.postPara);
  router.post('/add', controller.postPara.add);
  router.get('/getSome', controller.useSome.getSome);
  router.get('/hello', controller.useView.hello);
  router.get('/publicUse', controller.useView.publicUse);
  //db test,为什么我连接数据库失败，真是超尼玛的
};
