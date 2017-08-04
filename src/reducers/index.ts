
import { combineReducers, Reducer } from 'redux'

import feed, {FeedState} from './feed'

export interface RootState {
  feed: FeedState
}

export default combineReducers<RootState>({feed})