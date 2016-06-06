import {
	GET_TASKS_REQUEST,
	GET_TASKS_SUCCESS,
	GET_TASKS_FAIL,
	DELETE_TASKS_REQUEST,
	DELETE_TASKS_SUCCESS,
	DELETE_TASKS_FAIL,
} from '../constants/Task'

import {normalize, Schema, arrayOf} from 'normalizr';
import $ from 'jquery';

export function getTasks () {
	return (dispatch) => {
		dispatch({
			type: GET_TASKS_REQUEST
		});

		const tasks = new Schema('tasks');

		$.ajax({
			url:     '/tasks',
			method:  'GET',
			success: function (response) {
				let { data } = response;

				let res = normalize(data.tasks, tasks);
				if (data.success) {

					dispatch({
						type:    GET_TASKS_SUCCESS,
						payload: data.tasks
					})
				} else {
					dispatch({
						type:    GET_TASKS_FAIL,
						error:   true,
						payload: new Error(data.errorMessage)
					})
				}
			},
			error:   function (error) {
				"use strict";

				if (error.status == 401) {
					dispatch({
						type:    GET_TASKS_FAIL,
						error:   true,
						payload: new Error(error.responseText)
					})
				}
			}
		});
	}
}
export function addTask (task) {
	return (dispatch) => {
		dispatch({
			type: GET_TASKS_REQUEST
		});

		const tasks = new Schema('tasks');

		$.ajax({
			url:     '/tasks',
			method:  'POST',
			data:    task,
			success: function (response) {
				let { data } = response;

				let res = normalize(data.tasks, tasks);
				if (data.success) {

					dispatch({
						type:    GET_TASKS_SUCCESS,
						payload: data.tasks
					})
				} else {
					dispatch({
						type:    GET_TASKS_FAIL,
						error:   true,
						payload: new Error(data.errorMessage)
					})
				}
			},
			error:   function (error) {
				"use strict";

				if (error.status == 401) {
					dispatch({
						type:    GET_TASKS_FAIL,
						error:   true,
						payload: new Error(error.responseText)
					})
				}
			}
		});
	}
}
export function editTask () {
	"use strict";
	return (dispatch) => {
		dispatch({
			type: GET_TASKS_REQUEST
		});
	}
}
export function completeTask () {
	"use strict";
	return (dispatch) => {
		dispatch({
			type: GET_TASKS_REQUEST
		});
	}

}
export function deleteTask (id) {
	"use strict";

	return (dispatch) => {
		dispatch({
			type: DELETE_TASKS_REQUEST
		});


		$.ajax({
			url:     `/tasks/${id}`,
			method:  'DELETE',
			success: function (response) {
				let { data } = response;

				if (data.success) {
					dispatch({
						type:    DELETE_TASKS_SUCCESS,
						payload: {
							tasks:   data.tasks,
							message: data.message
						}
					})
				} else {
					dispatch({
						type:    DELETE_TASKS_FAIL,
						error:   true,
						payload: new Error(data.errorMessage)
					})
				}
			},
			error:   function (error) {
				"use strict";

				if (error.status == 401) {
					dispatch({
						type:    DELETE_TASKS_FAIL,
						error:   true,
						payload: new Error(error.responseText)
					})
				}
			}
		});
	}
}
