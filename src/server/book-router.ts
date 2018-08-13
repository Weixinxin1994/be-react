import Router from 'koa-router'

import db from './db'

const router = new Router

router.get('/api/book/list', ctx => {
    const { books } = db
    ctx.body = {
        data: books,
        total: books.length
    }
})

router.post('/api/book/remove/:id', ctx => {
    const { books } = db
    let { id } = ctx.params
    id = id | 0
    db.books = []
    let removed
    for (const book of books) {
        if (book.id !== id) {
            db.books.push(book)
        } else {
            removed = book
        }
    }
    ctx.body = { data: removed }
})

export default router
