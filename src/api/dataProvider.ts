import * as restProvider from 'ra-data-simple-rest'

export default restProvider('http://localhost:3000')

import {
    GET_LIST,
    GET_ONE,
    GET_MANY,
    GET_MANY_REFERENCE,
    CREATE,
    UPDATE,
    DELETE
} from 'react-admin'

const API_URL = ''