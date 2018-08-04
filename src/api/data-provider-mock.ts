import {
    GET_LIST, GET_ONE, GET_MANY,
    GET_MANY_REFERENCE,
    CREATE, UPDATE, DELETE
} from 'react-admin'

interface Result {
    data: any
    total?: number
}

const mockPost = {
    id: 1,
    title: '一个帖子',
    published_at: new Date,
    average_note: '啥',
    views: '阅读数量',
}

const mockListData: Result = {
    data: [mockPost],
    total: 1
}

class PostDataProvider {

    private type: any
    private params: any

    constructor(type, params) {
        this.type = type
        this.params = params
    }

    async provide(): Promise<Result> {
        switch (this.type) {
            case GET_LIST:
                return mockListData
        }
    }
}

export default apiUrl => function (type, resource, params) {
    console.log(arguments)
    switch (resource) {
        case 'posts':
            return new PostDataProvider(type, params).provide()
        default:
            throw new Error('异常资源请求！')
    }
}