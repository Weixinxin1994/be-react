import Router from 'koa-router'

import bookRouter from './book-router'
const router = new Router

router.get('/api/ping', ctx => ctx.body = 'pong')

router.use(bookRouter.routes())

export default router