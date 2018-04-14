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
  // btnStart.addEventListener('click', start, false);

  //отрисовка счета
  let score = document.createElement('div');
  score.className = 'score';
  let leftPoints = 0;
  let rightPoints = 0;
  score.innerHTML = `<span>${leftPoints}</span>:<span>${rightPoints}</span>`;
  topMenu.appendChild(btnStart);

  //отрисовка поля
  let field = document.createElement("div");
  field.className = 'field';
  const fieldObj = {};
  fieldObj.width = 700;
  fieldObj.height = 400;
  field.style.cssText = `
    position: relative;
    width: ${fieldObj.width}px;
    height: ${fieldObj.height}px; 
    background-color: yellow;
    border: 1px solid black;
  `;
  document.body.appendChild(field);

  // отрисовка мячика


  //класс мячика
  class BallClass {
    constructor(){
      this.ball = document.createElement('div');
      this.ball.className = 'field';
      this.width = 50;
      this.height = 50;
      this.x = fieldObj.width / 2 - this.width / 2;
      this.y = fieldObj.height / 2 - this.height / 2;
      this.speedX = 0;
      this.speedY = 0;
      this.ball.style.cssText = `
        position: absolute;
        left: ${this.x}px;
        top: ${this.y}px;
        width: ${this.width}px;
        height: ${this.height}px; 
        background-color: red;
        border-radius: 50%;
    `;
      field.appendChild(this.ball);
    }

    setRandomSpeed() {
      this.speedX = -5 + Math.round(Math.random() * 10);
      this.speedY = -5 + Math.round(Math.random() * 10);
    }

    startMoving() {
      setInterval(() => {
        this.x += this.speedX;

        вылетел ли мяч правее стены?
        if ( this.x+this.width > fieldObj.width ) {
          this.speedX = -this.speedX;
          this.x = fieldObj.width - this.width;
        }
        вылетел ли мяч левее стены?
        if ( this.x < 0 ) {
          this.speedX = -this.speedX;
          this.x = 0;
        }


        this.y += this.speedY;

        if ( this.y + this.height > fieldObj.height ) {
          this.speedY = -this.speedY;
          this.y = fieldObj.height - this.height;
        }
        // вылетел ли мяч выше потолка?
        if ( this.y < 0 ) {
          this.speedY = -this.speedY;
          console.log(this.speedY);
          this.y = 0;
        }

        this.ball.style.left = this.x + 'px';
        this.ball.style.top = this.y + 'px';
      } , 40);



    }

  }

  let ballObj = new BallClass();
  ballObj.setRandomSpeed();
  ballObj.startMoving();
  // console.log(ballObj.startMoving());

  //отрисовка ракеток
  let leftRacket = document.createElement('div');
  let rightRacket = document.createElement('div');
  leftRacket.className = 'left-racket';
  leftRacket.className = 'right-racket';
  const rRacketObj = {};
  const lRacketObj = {};
  rRacketObj.width = 10;
  rRacketObj.height = 110;
  lRacketObj.width = 10;
  lRacketObj.height = 110;
  rRacketObj.y = fieldObj.height / 2 - rRacketObj.height / 2;
  lRacketObj.y = fieldObj.height / 2 - rRacketObj.height / 2;
  leftRacket.style.cssText = `
    position: absolute;
    left: 0px;
    top: ${lRacketObj.y}px;
    width: ${lRacketObj.width}px;
    height: ${lRacketObj.height}px; 
    background-color: green;
  `;
  rightRacket.style.cssText = `
    position: absolute;
    right: 0px;
    top: ${rRacketObj.y}px;
    width: ${rRacketObj.width}px;
    height: ${rRacketObj.height}px; 
    background-color: blue;
  `;
  field.appendChild(leftRacket);
  field.appendChild(rightRacket);



}