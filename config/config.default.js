/*
 * @Author: Wuhao
 * @Email: kiwh77@126.com
 * @Date: 2019-12-17 13:18:49
 * @LastEditTime: 2019-12-17 14:48:45
 */
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
  config.keys = appInfo.name + '_1576559917682_6212';

  config.onerror = {
    all(err, ctx) {
      ctx.app.emit('error', err, ctx);
      ctx.status = err.status === 500 ? 200 : err.status;
      ctx.body = JSON.stringify({
        msg: err.message,
        data: null,
        code: err.status,
      });
    },
  };

  // add your middleware config here
  config.middleware = [];

  config.sequelize = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    database: 'egg-demo',
    username: 'root',
    password: '123456',
    dialectOptions: {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      supportBigNumbers: true,
      bigNumberStrings: true,
    },
    define: {
      raw: true,
      charset: 'utf8mb4',
      timestamps: true,
      freezeTableName: true,
    },
    timezone: '+08:00', // for writing to database
  };

  config.security = {
    csrf: {
      ignore: '*',
    },
    xframe: {
      enable: false,
    },
  };

  return config;
};
