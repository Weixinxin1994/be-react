import * as React from 'react'

export class Page extends React.Component<{ title: string }, {}> {

    public render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}
