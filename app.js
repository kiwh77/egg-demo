/*
 * @Author: Wuhao
 * @Email: kiwh77@126.com
 * @Date: 2019-12-17 14:05:46
 * @LastEditTime: 2019-12-17 14:14:27
 */
'use strict';

class AppHook {
  constructor(app) {
    this.app = app;
  }
  async didReady() {
    this.app.logger.info('应用启动完毕');
  }
}
module.exports = AppHook;
