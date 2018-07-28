import * as React from 'react'

import * as DatePicker from 'antd/lib/date-picker'
import 'antd/dist/antd.css'

const DatePicker_ = DatePicker as any

export class Page extends React.Component<{ title: string }, {}> {

    public render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <DatePicker_ />
            </div>
        )
    }
}
