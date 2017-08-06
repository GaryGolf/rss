
import { combineReducers, Reducer } from 'redux'
import feed from './feed'

export interface RootState {
  feed: FeedState
}

export default combineReducers<RootState>({feed})