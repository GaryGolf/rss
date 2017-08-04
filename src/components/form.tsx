import * as React from 'react'

interface Props {}
interface State {}

export default class Form extends React.Component<Props, State> {

    private input:HTMLInputElement

    submitForm(){
        console.log(this.input.value)
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