import * as React from 'react'
import { Admin, Resource } from 'react-admin'

import { authProvider } from '../auth'
import { dataProvider } from '../api'
import { i18nProvider } from '../i18n'

import { PostList } from './posts'

export const App = () => (
    <Admin title='XX管理系统' locale='cn' i18nProvider={i18nProvider} dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="posts" options={{ label: '帖子' }} list={PostList} />
    </Admin>
)
