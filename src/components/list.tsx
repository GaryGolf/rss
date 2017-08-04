import * as React from 'react'
import * as styles from './list.css'

interface Props {
    feed: Array<FeedItem> 
}
interface State {}

export default class List extends React.Component<Props, State> {
    render(){
        const { feed } = this.props
        if(!feed) return null
        const items = this.props.feed.map((item,idx) => (
            <div key={idx} className={styles['list-item']}>
                {item.content}
            </div>
        ))
        return (
            <div>
                {items}
            </div>
        )
    }
}