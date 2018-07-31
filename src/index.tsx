// import * as React from 'react'
// import * as ReactDOM from 'react-dom'

// import { App } from './containers/App'

// ReactDOM.render(
//     <App />,
//     document.getElementById('app')
// )


import * as React from 'react'
import { render } from 'react-dom'
import { Admin, Resource } from 'react-admin'
import * as restProvider from 'ra-data-simple-rest'

import { PostList, PostEdit, PostCreate } from './posts'

render(
    <Admin dataProvider={restProvider('http://localhost:3000')}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
    </Admin>,
    document.getElementById('app')
);