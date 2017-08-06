
import { combineReducers, Reducer } from 'redux'

import feed from './feed'
import links from './links'

export interface RootState {
  feed: FeedState,
  links: Array<string>
}

export default combineReducers<RootState>({feed, links})