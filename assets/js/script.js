$(document).ready(function () {
	"use strict";
	$.ajaxSetup({
		headers: {
			'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
		}
	});


	$('.js-update-task').on('submit', function (event) {
		event.preventDefault();

		var form = $(this);

		$.ajax({
			url:     form.attr('action'),
			method:  "PUT",
			data:    form.serialize(),
			success: function (response) {
				console.log(response);
			},

			error: function (error) {
				if (error.status === 422) {
					var errors = JSON.parse(error.responseText);
				}
			}
		})
	});

	$('.js-login').on('submit', function (event) {
		event.preventDefault();

		var form = $(this);

		$.ajax({
			url:     form.attr('action'),
			method:  "POST",
			data:    form.serialize(),
			success: function (response) {
				console.log(response);
			},

			error: function (error) {
				if (error.status === 422) {
					var errors = JSON.parse(error.responseText);
				}
			}
		})
	});
});
