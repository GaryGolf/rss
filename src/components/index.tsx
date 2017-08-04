import * as React from 'react'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'
import Form from './form'

const {connect} = require('react-redux')

interface Props {
    feed?: FeedState
    actions?: Actions.Interface
}
interface State {}


@connect(
    state => ({
        feed: state.feed as FeedState
    }),
    dispatch => ({
        actions: {
            feed: bindActionCreators(Actions.feed as any, dispatch)
        } 
    })
)
export default class Main extends React.Component <Props, State> {
   
    onSubmit(url){
        this.props.actions.feed.fetch(url)
    }
    render(){
        return (
            <div style={{margin:'20px'}}>
                <Form
                    onSubmit={this.onSubmit.bind(this)}
                />
            </div>
        )
    }
}