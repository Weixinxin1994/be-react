import axios from 'axios'

export const API_URL = 'http://localhost:5000'

export const client = axios.create({
    baseURL: API_URL
})