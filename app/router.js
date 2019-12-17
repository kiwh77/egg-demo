/*
 * @Author: Wuhao
 * @Email: kiwh77@126.com
 * @Date: 2019-12-17 13:18:49
 * @LastEditTime: 2019-12-17 16:52:36
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app;
  // RESTful 风格
  const token = middleware.token();
  router.resources('rest', '/rest', token, controller.home);
  // http
  router.get('/api', controller.home.getSomething);
  router.post('/api', controller.home.postSomething);
  router.put('/api', controller.home.putSomething);
  router.delete('/api', controller.home.deleteSomething);
};
