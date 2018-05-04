'use strict';
{
  let clock = document.body.querySelector('.clock');
  let index = 1;
  let degrees = 30;
  let number = 1;

  // let timeStr = hours + ':' + min + ':' + sec;
  //рисуем часы с цифрами
  for (let i = 1; i <= 6; i++) {
    let circleWrapper = document.createElement("div");
    circleWrapper.className = 'circleWrapper';
    circleWrapper.style.transform = `rotate(${degrees}deg)`;
    let circle1 = document.createElement("div");
    let circle2 = document.createElement("div");
    circle1.innerHTML = `<div class="inner-text">${number}</div>`;
    circle1.className = `circle circle-${index}`;
    circle1.querySelector('.inner-text').style.transform = `rotate(${-degrees}deg)`;
    ++index;
    ++number;
    circle2.className = `circle circle-${index}`;
    circleWrapper.appendChild(circle1);
    circleWrapper.appendChild(circle2);
    circle2.innerHTML = `<div class="inner-text">${number+5}</div>`;
    circle2.querySelector('.inner-text').style.transform = `rotate(${-degrees}deg)`;
    clock.appendChild(circleWrapper);
    ++index;
    degrees += 30;
  }

  //вывод времени в часах
  let time = document.createElement('div');
  let timeStr = '';
  clock.appendChild(time);

  //функция отрисовки элемента
  function drawArrow(container, arrow, c) {
    container.className = 'arrow-wrapper';
    clock.appendChild(container);
    arrow.className = 'arrow-'+c;
    container.appendChild(arrow);
  }
  //отрисовка секундной стрелки
  let arrowSecWr = document.createElement('div');
  let arrowSec = document.createElement('div');
  drawArrow(arrowSecWr, arrowSec, 'sec');

  //отрисовка минутной стрелки
  let arrowMinWr = document.createElement('div');
  let arrowMin = document.createElement('div');
  drawArrow(arrowMinWr, arrowMin, 'min');

  //отрисовка часовой стрелки
  let arrowHoursWr = document.createElement('div');
  let arrowHours = document.createElement('div');
  drawArrow(arrowHoursWr, arrowHours, 'hours ');

  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  setInterval(function() {
    let now = new Date();
    let hours = now.getHours();
    let min = now.getMinutes();
    let sec = addZero(now.getSeconds());

    timeStr = hours + ':' + min + ':' + sec;
    time.innerHTML = `<div class="time">${timeStr}</div>`;
    //запуск секундной стрелки

    let degSec = sec*6 + 96;
    arrowSecWr.style.transform = `rotate(${degSec}deg)`;
    degSec += 6;
    if (degSec === 456) degSec = 96;

    //запуск минутной стрелки
    let degMin = 90 + min*6;
    arrowMinWr.style.transform = `rotate(${degMin}deg)`;
    degMin += 6;
    if (degMin === 456) degMin = 96;

    //запуск часовой стрелки
    let degH = 90 + hours*30 + min*0.5;
    arrowHoursWr.style.transform = `rotate(${degH}deg)`;
    degH += 30;
    if (degH === 450) degH = 90;
  },
  1000);


}