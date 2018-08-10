import httpProxy from 'http-proxy'
import http from 'http'
import { IncomingMessage, ServerResponse } from 'http'

const proxy = httpProxy.createProxyServer({ changeOrigin: true })

const STATIC = 'http://localhost:8080'
const API_URL = 'http://localhost:3000'

function app(req: IncomingMessage, res: ServerResponse) {
    if (/(\.(html|js|txt|png|jpg|css|ico)$)|(^\/?$)/.test(req.url)) {
        proxy.web(req, res, { target: STATIC })
        return
    }
    proxy.web(req, res, { target: API_URL })
}

http.createServer(app).listen(5000, () => console.log('Proxying on 5000'))
