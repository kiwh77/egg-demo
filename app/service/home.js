/*
 * @Author: Wuhao
 * @Email: kiwh77@126.com
 * @Date: 2019-12-17 13:43:51
 * @LastEditTime: 2019-12-17 14:41:15
 */

'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  // 查询列表
  async index(params) {
    const { User } = this.app.model.models;
    const users = await User.findAll({ where: params });
    return users;
  }
  // 查询详情
  async show({ id }) {
    const { User } = this.app.model.models;
    const user = await User.findOne({ where: { id } });
    return user;
  }
  // 新增
  async create(params) {
    const { User } = this.app.model.models;
    const user = await User.create(params);
    return user;
  }
  // 更新
  async update(params, where) {
    const { User } = this.app.model.models;
    const user = await User.update(params, { where });
    return user;
  }
  // 删除
  async destroy(where) {
    const { User } = this.app.model.models;
    const user = await User.destroy({ where });
    return user;
  }
}

module.exports = HomeService;
