/*
 * @Author: Wuhao
 * @Email: kiwh77@126.com
 * @Date: 2019-12-17 13:44:42
 * @LastEditTime: 2019-12-17 14:30:55
 */

'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const User = app.model.define('User', {
    id: {
      type: STRING,
      primaryKey: true,
      allowNull: false,
      defaultValue: () => `${new Date().valueOf()}`,
    },
    name: {
      type: STRING,
      allowNull: false,
    },
    sex: {
      type: INTEGER,
      defualtValue: 0,
    },
    age: {
      type: INTEGER,
    },
    createdAt: {
      type: DATE,
      defaultValue: () => new Date(),
    },
    updatedAt: {
      type: DATE,
      defaultValue: () => new Date(),
    },
  }, {
    tableName: 'sys_user',
    comment: '用户信息表',
  });
  User.sync({
    force: false,
  });
  return User;
};
