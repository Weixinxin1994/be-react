import * as React from 'react'
import { Admin, Resource } from 'react-admin'

import authProvider from '../auth/auth-provider'
import dataProvider from '../api/data-provider'
import i18nProvider from '../i18n/i18n-provider'

import { PostList } from './posts'

export const App = () => (
    <Admin
        title='XX管理系统'
        locale='cn'
        i18nProvider={i18nProvider}
        dataProvider={dataProvider}
        authProvider={authProvider}
    >
        <Resource name="posts" options={{ label: '帖子' }} list={PostList} />
    </Admin>
)
