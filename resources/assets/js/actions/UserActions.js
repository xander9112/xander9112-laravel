import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS
} from '../constants/User'

export function getAuth () {
    "use strict";

    return function (dispatch) {
        if (localStorage.getItem('user') != null) {
            try {
                let user = JSON.parse(localStorage.getItem('user'));

                if (user) {
                    dispatch({
                        type:    LOGIN_SUCCESS,
                        payload: user
                    });
                }
            } catch (e) {
                console.log(e);
            }
        }
    }
}

export function handleLogin () {
    return function (dispatch) {
        dispatch({
            type: LOGIN_REQUEST
        });

        VK.Auth.login((r) => { // eslint-disable-line no-undef
            if (r.session) {
                let user = r.session.user;

                dispatch({
                    type:    LOGIN_SUCCESS,
                    payload: user
                })

            } else {
                dispatch({
                    type:    LOGIN_FAIL,
                    error:   true,
                    payload: new Error('Ошибка авторизации')
                })
            }
        }, 4); // запрос прав на доступ к photo
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
