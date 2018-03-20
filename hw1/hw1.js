'use strict';

function validationStr(str) {
	while( str==false || (/\d+/gim.test(str)) ) {
		str = prompt('Не верный ввод! Введите ещё раз.');
	}
	return str;
}

function validationAge(num) {
	while( isNaN(num) || num>200 || num<=0 || num === 0 ) {
		num = prompt('Не верный ввод! Введите ещё раз.');
	}
	return num;
}

var lastName = prompt('Ваша фамилия?');
validationStr(lastName);

var name = prompt('Ваше имя?');
validationStr(name);

var middleName = prompt('Ваше отчество?');
validationStr(middleName);

var age = prompt('Ваш возраст?');
var finalAge = validationAge(parseInt(age));

var sexBool = confirm('Ваш пол мужской?');

var sex = sexBool ? 'мужской' : 'женский';

var pension = ( (sexBool && age>63) || (!sexBool && age>58) ) ? 'да' : 'нет';

document.body.innerHTML = '<p>ваше ФИО:' + lastName + ' ' + name + ' ' + middleName + '</p>' + 
'<p>ваш возраст в годах:' + finalAge +'</p>' + 
'<p>ваш возраст в днях:' + (finalAge * 65) + '</p>' + 
'<p>через 5 лет вам будет:' + (+age + 5) +'</p>' +
'<p>ваш пол:' + sex + '</p>' +
'<p>вы на пенсии:' + pension + '</p>' ;
