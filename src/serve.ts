import http from 'http'

import Koa from 'koa'
import bodyParser from 'koa-bodyparser'

import router from './server'

const app = new Koa
app.keys = ['koa']

app.use(bodyParser())
app.use(router.routes())

http.createServer(app.callback()).listen(3000, () => console.log('Serving on 3000'))
