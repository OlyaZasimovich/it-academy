'use strict';
{

  let data = {};

  var savedData = localStorage['saved'];
  if (savedData) {
    data = JSON.parse(savedData);
  }
  console.log(data);

  if (!savedData) {
    function validationStr(str) {
      while (!str || (/\d+/gim.test(str))) {
        str = prompt('Не верный ввод! Введите ещё раз.');
      }
      return str;
    };

    data.lastName = prompt('Ваша фамилия?');
    validationStr(data.lastName);

    data.name = prompt('Ваше имя?');
    validationStr(data.name);

    data.middleName = prompt('Ваше отчество?');
    validationStr(data.middleName);

    data.age = prompt('Ваш возраст?');
    data.age = parseInt(data.age);
    data.finalAge = function (a) {
      while (isNaN(a) || a > 200 || a <= 0 || a === 0) {
        a = prompt('Не верный ввод! Введите ещё раз.');
      }
      return a;
    }(data.age);

    data.sexBool = confirm('Ваш пол мужской?');

    data.sex = data.sexBool ? 'мужской' : 'женский';

    data.pension = ( (data.sexBool && data.age > 63) || (!data.sexBool && data.age > 58) ) ? 'да' : 'нет';
	}

  let text = document.getElementById("myform");
  text.innerHTML = `<p>ваше ФИО: ${data.lastName} ${data.name} ${data.middleName} </p> 
		<p>ваш возраст в годах: ${data.finalAge} </p> 
		<p>ваш возраст в днях: ${(data.finalAge * 655)} </p>
		<p>через 5 лет вам будет: ${(+data.finalAge + 5)} </p>
		<p>ваш пол: ${data.sex} </p>
		<p>вы на пенсии: ${data.pension} </p>`;

	localStorage['saved'] = JSON.stringify(data);

}

