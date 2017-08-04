import * as React from 'react'
import * as styles from './form.css'

interface Props {
    url: string
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
                    className={styles.input}
                    ref={element=>this.input=element}
                    defaultValue={this.props.url}
                    placeholder="url"
                />
                <button onClick={this.submitForm.bind(this)}>
                    Submit
                </button>
            </form>
        )
    }
}