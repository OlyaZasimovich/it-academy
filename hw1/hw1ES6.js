'use strict';

function validationStr(str) {
	while( str==false || (/\d+/gim.test(str)) ) {
		str = prompt('Не верный ввод! Введите ещё раз.');
	}
	return str;
}

var lastName = prompt('Ваша фамилия?');
validationStr(lastName);

var name = prompt('Ваше имя?');
validationStr(name);

var middleName = prompt('Ваше отчество?');
validationStr(middleName);

var age = prompt('Ваш возраст?');
age = parseInt(age);
var finalAge = function(a) {
	while( isNaN(a) || a>200 || a<=0 || a === 0 ) {
		a = prompt('Не верный ввод! Введите ещё раз.');
	}
	return a;
}(age);

var sexBool = confirm('Ваш пол мужской?');

var sex = sexBool ? 'мужской' : 'женский';

var pension = ( (sexBool && age>63) || (!sexBool && age>58) ) ? 'да' : 'нет';

document.body.innerHTML = `<p>ваше ФИО: ${lastName} ${name} ${middleName} </p> 
<p>ваш возраст в годах: ${finalAge} </p> 
<p>ваш возраст в днях: ${(finalAge * 655)} </p>
<p>через 5 лет вам будет: ${(+finalAge + 5)} </p>
<p>ваш пол: ${sex} </p>
<p>вы на пенсии: ${pension} </p>` ;
