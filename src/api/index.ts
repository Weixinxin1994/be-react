import BookDataProvider from './book-api'

export function dataProvider(type, resource, params) {
    switch (resource) {
        case 'book':
            return new BookDataProvider(type, params).provide()
        default:
            throw new Error('异常资源请求！')
    }
}
