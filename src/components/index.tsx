import * as React from 'react'

import Form from './form'


interface Props {}
interface State {}

export default class Main extends React.Component<Props, State> {

   
    render(){


        return (
            <div style={{margin:'20px'}}>
                <Form/>
            </div>
        )
    }
}