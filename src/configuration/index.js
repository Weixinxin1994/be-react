import axios from 'axios'

export const host = 'http://localhost:8000'

const service = axios.create({
    baseURL: host, // host
    timeout: 5000, // timeout
    withCredentials: true // allow cookie
})

export { service as axios }
