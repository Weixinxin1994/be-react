import React from 'react'
import { Admin, Resource } from 'react-admin'

import { authProvider } from '../auth'
import { dataProvider } from '../api'
import { i18nProvider } from '../i18n'

import { BookList } from './book'

export const App = () => (
    <Admin title='我的书库' locale='cn' i18nProvider={i18nProvider} dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="book" options={{ label: '图书' }} list={BookList} />
    </Admin>
)
