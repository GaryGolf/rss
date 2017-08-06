import * as Actions from '../constants/actions'

const initialState = {
    feed: null,
    items: []
}

export default function feed(state=initialState, {type, payload}): FeedState {

    switch(type){
        case Actions.FETCH_RSS_LINKS :
        case Actions.FETCH_RSS_FEED : {
            if(payload.status == 'error') return state
            const {feed, items} = payload
            return {feed, items}
        }
    }
    return state
}