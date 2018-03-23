'use strict';
{
function validationStr(str) {
	while( str==false || (/\d+/gim.test(str)) ) {
		str = prompt('Не верный ввод! Введите ещё раз.');
	}
	return str;
}

let lastName = prompt('Ваша фамилия?');
validationStr(lastName);

let name = prompt('Ваше имя?');
validationStr(name);

let middleName = prompt('Ваше отчество?');
validationStr(middleName);

let age = prompt('Ваш возраст?');
age = parseInt(age);
let finalAge = function(a) {
	while( isNaN(a) || a>200 || a<=0 || a === 0 ) {
		a = prompt('Не верный ввод! Введите ещё раз.');
	}
	return a;
}(age);

let sexBool = confirm('Ваш пол мужской?');

let sex = sexBool ? 'мужской' : 'женский';

let pension = ( (sexBool && age>63) || (!sexBool && age>58) ) ? 'да' : 'нет';

document.body.innerHTML = `<p>ваше ФИО: ${lastName} ${name} ${middleName} </p> 
<p>ваш возраст в годах: ${finalAge} </p> 
<p>ваш возраст в днях: ${(finalAge * 655)} </p>
<p>через 5 лет вам будет: ${(+finalAge + 5)} </p>
<p>ваш пол: ${sex} </p>
<p>вы на пенсии: ${pension} </p>` ;
}
