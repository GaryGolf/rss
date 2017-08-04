import * as React from 'react'
import * as API from '../api'

interface Props {
    onSubmit(url:string):void
}
interface State {}

export default class Form extends React.Component<Props, State> {

    private input:HTMLInputElement

    submitForm(){
        const url = this.input.value
        this.props.onSubmit(url)
    }

    render(){
        return (
            <form action=""
                onSubmit={e=>e.preventDefault()}>
                <input
                    ref={element=>this.input=element}
                    placeholder="url"
                />
                <button onClick={this.submitForm.bind(this)}>
                    Submit
                </button>
            </form>
        )
    }
}