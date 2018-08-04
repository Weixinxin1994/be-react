import createDataProvider from './data-provider'
import createDataProviderMock from './data-provider-mock'

const API_URL = 'http://localhost:3000'

// 后端接口
export default createDataProvider(API_URL)

// Mock接口
// export default createDataProviderMock(API_URL)

