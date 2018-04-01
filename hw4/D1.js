"use strict";
{
  let str = prompt("Введите строку");
  while (!str) {
    str = prompt("Введите строку еще раз");
  }

  function vowelsStr(text) {
    let counter = 0;
    let volwes = ['а','о','и','е','ё','э','ю','я','у','ы'];
    text.toLowerCase();
    let textArray = text.split('');
    volwes.forEach((volwe) => {
      textArray.forEach((letter) => {
        if (volwe === letter) {
          counter++;
        }
      });
    });
    return counter;
  }
  console.log('Количество гласных с помощью forEach: ',vowelsStr(str));

  function vowelsStr2(text) {
    let counter = 0;
    text.toLowerCase();
    let textArray = text.split('');
    let volwesArray = textArray.filter(letter => letter === ('а' || 'о' ||'и'||'е'||'ё'||'э'||'ю'||'я'||'у'||'ы'));
    return volwesArray.length;
  }
  console.log('Количество гласных с помощью forEach: ',vowelsStr2(str));

  function vowelsStr3(text) {
    text.toLowerCase();
    let textArray = text.split('');

    let result = textArray.reduce(function(sum, current) {
      if(current === ('а' || 'о' ||'и'||'е'||'ё'||'э'||'ю'||'я'||'у'||'ы')) sum++;
      return sum ;
    }, 0);

    return result;
  }
  console.log('Количество гласных с помощью forEach: ',vowelsStr3(str));
}