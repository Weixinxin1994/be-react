import * as React from 'react'
import { Admin, Resource } from 'react-admin'

import authProvider from '../api/authProvider'
import dataProvider from '../api/dataProvider'
import i18nProvider from '../api/i18nProvider'

import { PostList, PostEdit, PostCreate } from './posts'

export const App = () => (
    <Admin
        title='XX管理系统'
        locale='cn'
        i18nProvider={i18nProvider}
        dataProvider={dataProvider}
        authProvider={authProvider}
    >
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
    </Admin>
)