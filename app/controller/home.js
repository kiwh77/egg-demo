/*
 * @Author: Wuhao
 * @Email: kiwh77@126.com
 * @Date: 2019-12-17 13:18:49
 * @LastEditTime: 2019-12-17 14:37:53
 */
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  // 查询列表
  async index() {
    const { ctx, service } = this;
    const { request } = ctx;
    const response = await service.home.index(request.query);
    ctx.status = 200;
    ctx.body = {
      code: 200,
      msg: '查询成功',
      count: response.count,
      data: response,
    };
  }
  // 查询详情
  async show() {
    const { ctx, service } = this;
    const { params } = ctx;
    const response = await service.home.show(params);
    ctx.body = {
      code: 200,
      msg: '查询成功',
      count: response ? 1 : 0,
      data: response,
    };
  }
  // 新增
  async create() {
    const { ctx, service } = this;
    const { request } = ctx;
    const response = await service.home.create(request.body);
    ctx.body = {
      code: 200,
      msg: '新增成功',
      count: 0,
      data: response,
    };
  }
  // 更新
  async update() {
    const { ctx, service } = this;
    const { request, params } = ctx;
    const response = await service.home.update(request.body, params);
    ctx.body = {
      code: 200,
      msg: '更新成功',
      count: 0,
      data: response,
    };
  }
  // 删除
  async destroy() {
    const { ctx, service } = this;
    const { params } = ctx;
    const response = await service.home.destroy(params);
    ctx.body = {
      code: 200,
      msg: '删除成功',
      count: 0,
      data: response,
    };
  }
  async getSomething() {
    const { request, params } = this.ctx;
    this.ctx.status = 200;
    this.ctx.body = {
      url: request.originalUrl,
      query: request.query,
      body: request.body,
      params,
    };
  }
  async postSomething() {
    const { request, params } = this.ctx;
    this.ctx.status = 200;
    this.ctx.body = {
      url: request.originalUrl,
      query: request.query,
      body: request.body,
      params,
    };
  }
  async putSomething() {
    const { request, params } = this.ctx;
    this.ctx.status = 200;
    this.ctx.body = {
      url: request.originalUrl,
      query: request.query,
      body: request.body,
      params,
    };
  }
  async deleteSomething() {
    const { request, params } = this.ctx;
    this.ctx.status = 200;
    this.ctx.body = {
      url: request.originalUrl,
      query: request.query,
      body: request.body,
      params,
    };
  }
}

module.exports = HomeController;
