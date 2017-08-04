import * as Actions from '../constants/actions'

const initialState = {
    feed: null,
    items: []
}

export default function menu(state=initialState, {type, payload}): FeedState {

    switch(type){
        case Actions.FETCH_RSS_FEED :
       
    }
    return state
}