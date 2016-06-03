import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT_SUCCESS
} from '../constants/User'

import {fetchApi} from '../utils/load';
import {UserModel} from '../models/UserModel';
import $ from 'jquery';

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

		VK.Auth.logout(() => { // eslint-disable-line no-undef
			dispatch({
				type:    LOGOUT_SUCCESS,
				payload: {}
			})
		}); // запрос прав на доступ к photo
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
