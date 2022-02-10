'use strict';
let userName = document.getElementById('name');
let userTel = document.getElementById('tel');
let userEmail = document.getElementById('email');
let buttonSubmit =document.getElementById('submit');

const nameValid = function () {
	const nameRegExp = new RegExp("^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$", 'i');
	if (nameRegExp.test(userName.value) && userName.value !== '') {
		userName.setAttribute('style', 'border: 1px solid green');
		return true
	} else {
		userName.setAttribute('style', 'border: 2px solid red');
		return false
	}
};
const telValid = function () {
	const telRegExp = new RegExp("^\d[\d\(\)\ -]{4,14}\d$", 'i');
	if (telRegExp.test(userTel.value) && userTel.value !== '') {
		userTel.setAttribute('style', 'border: 1px solid green');
		return true
	} else {
		userTel.setAttribute('style', 'border: 2px solid red');
		return false
	}
};
//Голову сломал, почему при проверке номера всегда false. 

const emailValid = function () {
	const emailRegExp = new RegExp("^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$", 'i');
	if (emailRegExp.test(userEmail.value) && userEmail.value !== '') {
		userEmail.setAttribute('style', 'border: 1px solid green');
		return true
	} else {
		userEmail.setAttribute('style', 'border: 2px solid red');
		return false
	}
};

userName.addEventListener('input', nameValid);
userTel.addEventListener('input', telValid);
userEmail.addEventListener('input', emailValid);
// buttonSubmit.addEventListener('click', submitFn)