/*
 * @Author: Wuhao
 * @Email: kiwh77@126.com
 * @Date: 2019-12-17 13:18:49
 * @LastEditTime: 2019-12-17 13:21:24
 */
'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
};
