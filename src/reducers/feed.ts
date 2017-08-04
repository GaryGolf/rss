import * as Actions from '../constants/actions'

export type FeedState = Array<any>
    
export default function menu(state=[], {type, payload}): FeedState {

    switch(type){
        case Actions.FETCH_RSS_FEED :
       
    }
    return state
}