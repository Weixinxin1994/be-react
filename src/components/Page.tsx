import * as React from 'react'

export class Page extends React.Component<{ title: string }, {}> {

    public render() {
        return (<h1>Page {this.props.title}</h1>)
    }
}
