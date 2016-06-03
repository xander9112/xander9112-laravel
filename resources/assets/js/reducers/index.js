import {combineReducers} from 'redux'
import page from './page'
import user from './user'
import task from './task'

export default combineReducers({
	page,
	user,
	task
})
