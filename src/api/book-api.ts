import {
    GET_LIST, GET_ONE, GET_MANY,
    GET_MANY_REFERENCE,
    CREATE, UPDATE, DELETE
} from 'react-admin'

import { client } from '../config'

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

    async provide() {
        switch (this.type) {
            case GET_LIST: return this.list()
        }
    }
}
