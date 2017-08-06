import * as Actions from '../constants/actions'

const initialState:Array<string> = []

export default function links(state=initialState, {type, payload}): Array<string> {

    switch(type){
        case Actions.FETCH_RSS_LINKS :
            if(!!payload && payload.length) return payload
    }
    return state
}