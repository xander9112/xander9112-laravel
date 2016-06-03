import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT_SUCCESS
} from '../constants/User'

import $ from 'jquery';
import {fetchApi} from '../utils/load';
import {UserModel} from '../models/UserModel';

export function getAuth () {
	"use strict";

	return function (dispatch) {

		$.ajax({
			url:     '/auth/login',
			method:  'GET',
			success: function (response) {
				let { data } = response;

				if (data.success) {
					dispatch({
						type:    LOGIN_SUCCESS,
						payload: data.user
					})
				} else {
					dispatch({
						type:    LOGIN_FAIL,
						error:   true,
						payload: new Error(data.errorMessage)
					})
				}
			}
		});
	}
}

export function handleLogin (formValue) {
	return function (dispatch) {
		dispatch({
			type: LOGIN_REQUEST
		});

		login(formValue).then((response) => {
			"use strict";

			let { data } = response;

			if (data.success) {
				dispatch({
					type:    LOGIN_SUCCESS,
					payload: data.user
				})
			} else {
				dispatch({
					type:    LOGIN_FAIL,
					error:   true,
					payload: new Error(data.errorMessage)
				})
			}
		});
	}
}

export function handleLogout () {
	return function (dispatch) {
		dispatch({
			type: LOGIN_REQUEST
		});

		$.ajax({
			url:     '/auth/logout',
			method:  'GET',
			success: function (response) {
				let { data } = response;

				if (data.success) {
					dispatch({
						type:    LOGIN_SUCCESS,
						payload: data.user
					})
				} else {
					dispatch({
						type:    LOGIN_FAIL,
						error:   true,
						payload: new Error(data.errorMessage)
					})
				}
			}
		});
	}
}

function login (data) {
	"use strict";

	return $.ajax({
		url:    '/auth/login',
		method: 'POST',
		data:   data
	});
}
