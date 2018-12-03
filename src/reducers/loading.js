import {
	RECEIVE_ACTION
} from '../actions/shared'

export default function loading(state = true, action) {

	switch (action.type) {
		case RECEIVE_ACTION:
			return false
		default:
			return state
	}

}