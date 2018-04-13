'use strict';
{
  //отрисовка верхнего меню
  let topMenu = document.createElement('div');
  topMenu.className = 'top-menu';
  document.body.appendChild(topMenu);

  //отрисовка кнопки старт
  let btnStart = document.createElement('button');
  btnStart.className = 'btn-start';
  btnStart.innerText = 'старт';
  topMenu.appendChild(btnStart);

  //отрисовка счета
  let score = document.createElement('div');
  score.className = 'score';
  let leftPoints = 0;
  let rightPoints = 0;
  score.innerHTML = '<span>${leftPoints}</span>:<span>${rightPoints}</span>';
  topMenu.appendChild(btnStart);

  //отрисовка поля
  let field = document.createElement("div");
  field.className = 'field';
  let fieldWidth = 700;
  let fieldHeight = 400;
  field.style.cssText = `
    position: relative;
    width: ${fieldWidth}px;
    height: ${fieldHeight}px; 
    background-color: yellow;
    border: 1px solid black;
  `;
  document.body.appendChild(field);

  // отрисовка мячика
  let ball = document.createElement('div');
  ball.className = 'field';
  let ballWidth = 50;
  let ballHeight = 50;
  let ballLeft = fieldWidth / 2 - ballWidth / 2;
  let ballTop = fieldHeight / 2 - ballHeight / 2;
  ball.style.cssText = `
    position: absolute;
    left: ${ballLeft}px;
    top: ${ballTop}px;
    width: ${ballWidth}px;
    height: ${ballHeight}px; 
    background-color: red;
    border-radius: 50%;
  `;
  field.appendChild(ball);

  //отрисовка ракеток
  let leftRacket = document.createElement('div');
  let rightRacket = document.createElement('div');
  leftRacket.className = 'left-racket';
  leftRacket.className = 'right-racket';
  let racketWidth = 10;
  let racketHeight = 110;
  let racketY = fieldHeight / 2 - racketHeight / 2;
  leftRacket.style.cssText = `
    position: absolute;
    left: 0px;
    top: ${racketY}px;
    width: ${racketWidth}px;
    height: ${racketHeight}px; 
    background-color: green;
  `;
  rightRacket.style.cssText = `
    position: absolute;
    right: 0px;
    top: ${racketY}px;
    width: ${racketWidth}px;
    height: ${racketHeight}px; 
    background-color: blue;
  `;
  field.appendChild(leftRacket);
  field.appendChild(rightRacket);


}