import {
	GET_TASKS_REQUEST,
	GET_TASKS_SUCCESS,
	GET_TASKS_FAIL,
} from '../constants/Task'

import {normalize, Schema, arrayOf} from 'normalizr';

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
				console.log(res);
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
			}
		});

		/*dispatch({
		 type:    GET_TASKS_SUCCESS,
		 payload: photos
		 })*/
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
export function deleteTask () {
	"use strict";

	return (dispatch) => {
		dispatch({
			type: GET_TASKS_REQUEST
		});
	}
}

/*
 function makeYearPhotos (photos, selectedYear) {
 let createdYear, yearPhotos = [];

 photos.forEach((item) => {
 createdYear = new Date(item.created * 1000).getFullYear();
 if (createdYear === selectedYear) {
 yearPhotos.push(item)
 }
 });

 yearPhotos.sort((a, b) => b.likes.count - a.likes.count);

 return yearPhotos
 }

 function getMorePhotos (offset, count, year, dispatch) {
 VK.Api.call('photos.getAll', { extended: 1, count: count, offset: offset }, (r) => { // eslint-disable-line no-undef
 try {
 console.log(offset, r.response[ 0 ], count);

 if (offset <= r.response[ 0 ] - count) {
 offset += 200;
 photosArr = photosArr.concat(r.response);
 getMorePhotos(offset, count, year, dispatch)
 } else {
 let photos = makeYearPhotos(photosArr, year);
 cached = true
 dispatch({
 type:    GET_PHOTOS_SUCCESS,
 payload: photos
 })
 }
 }
 catch (e) {
 dispatch({
 type:    GET_PHOTOS_FAIL,
 error:   true,
 payload: new Error(e)
 })
 }

 })
 }

 export function getPhotos (year) {

 return (dispatch) => {
 dispatch({
 type:    GET_PHOTOS_REQUEST,
 payload: year
 });

 if (cached) {
 let photos = makeYearPhotos(photosArr, year);
 dispatch({
 type:    GET_PHOTOS_SUCCESS,
 payload: photos
 })
 } else {
 getMorePhotos(0, 99, year, dispatch)
 }

 }
 }
 */
