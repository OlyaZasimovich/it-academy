'use strict';

const readline = require('readline');

const result = {
  name:'',
  age:0,
  sex:'',
}

function askName() {
  const rl = prompt();
  rl.question('Какое Ваше имя? ', (answer) => {
    rl.close();
  if (!answer) {
    console.log('Имя не может быть пустым.');
    askName();
  }
  else {
    result.name = answer;
    askAge();
  }

});
}

function askAge() {
  const rl = prompt();
  rl.question('Какой Ваш возраст? ', (answer) => {
    const age = +answer;
  if (isNaN(age)) {
    console.log('Возраст должен быть введен числом.');
    askAge();
  }
  else {
    result.age = age;
    askSex();
  }
});
}

function askSex() {
  const rl = prompt();
  rl.question('Ваш пол? ', (answer) => {
    rl.close();
  if (!answer){
    console.log('Пол не может быть пустым.');
    askSex();
  } else if( (/муж|man|male/i.test(answer)) || (/жен|woman|girl|female/i.test(answer)) ) {
    result.sex = answer;
    end();
  } else {
    console.log('Не верный пол');
    askSex();
  }
});
}

function prompt() {
  return readline.createInterface({ input: process.stdin,  output: process.stdout});
}

function end() {
  console.log(`Вы ввели: имя ${result.name}, возраст ${result.age}, пол ${result.sex}`);
}

askName();