import * as Actions from '../constants/actions'
// import * as API from '../api'

export interface Interface {
    fetch(): Action
}

export const fetch = () => ({ type: Actions.FETCH_RSS_FEED, payload: null})