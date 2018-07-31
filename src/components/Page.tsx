import * as React from 'react'

import Button from '@material-ui/core/Button';

export class Page extends React.Component<{ title: string }, {}> {

    public render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <Button variant="raised" color="primary">Hello World</Button>
            </div>
        )
    }
}
