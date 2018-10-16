import { client } from '../config'
import { Book } from '../model'

import * as ra from 'react-admin'

const {
    GET_LIST, GET_ONE, GET_MANY,
    GET_MANY_REFERENCE,
    CREATE, UPDATE, DELETE
} = ra as any

export default class BookDataProvider {

    private type: any
    private params: any

    constructor(type, params) {
        this.type = type
        this.params = params
    }

    async list() {
        const res = await client.get('/api/book/list')
        return res.data
    }

    async deleteById() {
        const { id } = this.params
        const res = await client.post(`/api/book/remove/${id}`)
        return res.data
    }

    async provide() {
        console.log(this.type)
        switch (this.type) {
            case GET_LIST: return this.list()
            case DELETE: return this.deleteById()
        }
    }
}
