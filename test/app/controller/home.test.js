/*
 * @Author: Wuhao
 * @Email: kiwh77@126.com
 * @Date: 2019-12-17 13:18:49
 * @LastEditTime: 2019-12-17 14:44:47
 */
'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/home.test.js', () => {
  it('should assert', () => {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));

    // const ctx = app.mockContext({});
    // yield ctx.service.xx();
  });

  it('should GET /api', () => {
    return app.httpRequest()
      .get('/api')
      .expect(200);
  });
  it('should POST /api', () => {
    return app.httpRequest()
      .post('/api')
      .expect(200);
  });
  it('should PUT /api', () => {
    return app.httpRequest()
      .put('/api')
      .expect(200);
  });
  it('should DELETE /api', () => {
    return app.httpRequest()
      .delete('/api')
      .expect(200);
  });
});
