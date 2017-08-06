import * as Actions from '../constants/actions'
import * as API from '../api'

export interface Interface {
    links(url:string): Action
    fetch(url:string): Action
}

export const links = url => ({ type: Actions.FETCH_RSS_LINKS, payload: API.fetchLinks(url)})
export const fetch = url => ({ type: Actions.FETCH_RSS_FEED, payload: API.fetchFeed(url)})