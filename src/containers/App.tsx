import * as React from 'react'

import { Page } from '../components/Page'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export class App extends React.Component<{}, {}> {
    public render() {
        return (<Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/page-a">Page A</Link>
                    </li>
                    <li>
                        <Link to="/page-b">Page B</Link>
                    </li>
                </ul>

                <hr />

                <Route exact path="/" component={() => <Page title="Home" />} />
                <Route path="/page-a" component={() => <Page title="A" />} />
                <Route path="/page-b" component={() => <Page title="B" />} />
            </div>
        </Router>)
    }
}