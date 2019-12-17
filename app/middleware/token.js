/*
 * @Author: Wuhao
 * @Email: kiwh77@126.com
 * @Date: 2019-12-17 13:24:41
 * @LastEditTime: 2019-12-17 14:28:45
 */


'use strict';

/**
 * token验证中间件，验证token有效性
 */
module.exports = () => {
  return async (ctx, next) => {
    const { app, header } = ctx;
    const { authorization: token } = header;
    app.logger.debug('TOKEN中间件，验证token', token);
    // 验证token
    if (!token || token === '') throw (new Error('Unauthorization'));
    await next();
  };
};
