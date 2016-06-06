import {
	GET_TASKS_REQUEST,
	GET_TASKS_SUCCESS,
	GET_TASKS_FAIL,
	DELETE_TASKS_REQUEST,
	DELETE_TASKS_SUCCESS,
	DELETE_TASKS_FAIL,
} from '../constants/Task'

const initialState = {
	tasks:    [],
	fetching: false,
	message:  '',
	error:    ''
};

export default function task (state = initialState, action) {
	switch (action.type) {
		case GET_TASKS_REQUEST:
			return { ...state, fetching: true, error: '' };

		case GET_TASKS_SUCCESS:
			return { ...state, tasks: action.payload, fetching: false, error: '' };

		case GET_TASKS_FAIL:
			return { ...state, error: action.payload.message, fetching: false };
		case DELETE_TASKS_REQUEST:
			return { ...state, fetching: true, error: '' };

		case DELETE_TASKS_SUCCESS:
			return {
				...state,
				tasks:    action.payload.tasks,
				message:  action.payload.message,
				fetching: false,
				error:    ''
			};

		case DELETE_TASKS_FAIL:
			return { ...state, error: action.payload.message, fetching: false };

		default:
			return state;
	}
}
