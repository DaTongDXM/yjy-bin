import { Module } from 'module';
import path from 'path';
import YJYKoaCore from 'yjy-koa-core/core';
export default class IndexController extends YJYKoaCore {
  constructor() {
    super({ appPath: path.resolve(__dirname, '../') })
  }

  public async entry(ctx, next) {
    ctx.body = 'index'
    ctx.status = 200
  }
}