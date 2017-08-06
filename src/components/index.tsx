import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'
import Form from './form'
import List from './list'

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
    private url: string
    private refresh: number
    private refreshDelay: number 
    private iframe: HTMLIFrameElement
    private linkIndex: number
    constructor(props:Props){
        super(props)
        this.url = 'https://news.rambler.ru/rss/?updated=other'
        this.refreshDelay =  1000 * 60 * 5
        this.linkIndex = 0
        this.refreshFeed = this.refreshFeed.bind(this)
    }

    componentDidMount(){
        this.refresh = window.setInterval(this.refreshFeed, this.refreshDelay)
    }

    componentWillUnmount(){
        clearInterval(this.refresh)
    }

    componentWillReceiveProps(nextProps){
        const {feed, items} = nextProps.feed
        if(!!items && items.length) this.url = feed.link
    }

    onSubmit(url:string){
        this.url = url
        this.props.actions.feed.links(url)
        this.refreshFeed()
    }
    refreshFeed(){
        if(!!this.url) this.props.actions.feed.fetch(this.url)
    }

    render(){
        return (
            <div style={{margin:'20px'}}>
                <Form
                    url={this.url}
                    onSubmit={this.onSubmit.bind(this)}
                />
                <List 
                    feed={this.props.feed.items}
                />
            </div>
        )
    }
}