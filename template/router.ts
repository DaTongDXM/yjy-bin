import { YJYKoaCoreAPP } from 'yjy-koa-core';
export default (app: YJYKoaCoreAPP) => {
  const { controller, router } = app;
  router.get('/', controller.index.entry);
  return router;
}