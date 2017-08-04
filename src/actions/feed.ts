import * as Actions from '../constants/actions'
import * as API from '../api'

export interface Interface {
    fetch(url:string): Action
}

export const fetch = url => ({ type: Actions.FETCH_RSS_FEED, payload: API.fetchRSSFeed(url)})