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
  score.innerHTML = `<span>${leftPoints}</span>:<span>${rightPoints}</span>`;
  topMenu.appendChild(score);

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

  //отрисовка ракеток
  class lRacket {
    constructor() {
      this.leftRacket = document.createElement('div');
      this.leftRacket.className = 'left-racket';
      this.width = 10;
      this.height = 110;
      this.y = fieldObj.height / 2 - this.height / 2;
      this.leftRacket.style.cssText = `
                position: absolute;
                left: 0px;
                top: ${this.y}px;
                width: ${this.width}px;
                height: ${this.height}px; 
                background-color: green;
            `;
      field.appendChild(this.leftRacket);
    }

  }
  let leftRacket1 = new lRacket();


  class rRacket {
    constructor() {
      this.rightRacket = document.createElement('div');
      this.rightRacket.className = 'right-racket';
      this.width = 10;
      this.height = 110;
      this.y = fieldObj.height / 2 - this.height / 2;
      this.rightRacket.style.cssText = `
          position: absolute;
          right: 0px;
          top: ${this.y}px;
          width: ${this.width}px;
          height: ${this.height}px; 
          background-color: blue;
      `;
      field.appendChild(this.rightRacket);
    }
  }
  let rightRacket1 = new rRacket();
  


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
      while(!this.speedX) {
        this.speedX = -3 + Math.round(Math.random() * 6);
      }
      while(!this.speedY) {
        this.speedY = -3 + Math.round(Math.random() * 6);
      }

    }

    startMoving() {
        this.x += this.speedX;
        //если мяч отбивается левой ракеткой?
        if ( (this.y >= (leftRacket1.y - this.height)) &&
             (this.y <= (leftRacket1.y + leftRacket1.height)) &&
             (this.x  < leftRacket1.width)
            ) {
          this.speedX = -this.speedX;
          this.x = leftRacket1.width;
        }

        //если мяч отбивается правой ракеткой?
        if ( (this.y >= (rightRacket1.y - this.height)) &&
          (this.y <= (rightRacket1.y + rightRacket1.height)) &&
          (this.x + this.width  > fieldObj.width - rightRacket1.width)
        ) {
          this.speedX = -this.speedX;
          // this.x = fieldObj.width - rightRacket1.width;
        }

        //вылетел ли мяч правее стены?
        if ( this.x+this.width > fieldObj.width ) {
          // this.speedX = -this.speedX;
          // this.x = fieldObj.width - this.width;
          this.speedY = 0;
          this.speedX = 0;
          this.x = fieldObj.width - this.width;
          rightPoints++;
          score.innerHTML = `<span>${leftPoints}</span>:<span>${rightPoints}</span>`;
        }
        //вылетел ли мяч левее стены?
        if ( this.x < 0 ) {
          // this.speedX = -this.speedX;
          // this.x = 0;
          this.speedY = 0;
          this.speedX = 0;
          this.x = 0;
          leftPoints++;
          score.innerHTML = `<span>${leftPoints}</span>:<span>${rightPoints}</span>`;
        }

        this.y += this.speedY;

        // вылетел ли мяч ниже потолка?
        if ( this.y + this.height > fieldObj.height ) {
          this.speedY = -this.speedY;
          this.y = fieldObj.height - this.height;
        }
        // вылетел ли мяч выше потолка?
        if ( this.y < 0 ) {
          this.speedY = -this.speedY;
          this.y = 0;
        }

        this.ball.style.left = this.x + 'px';
        this.ball.style.top = this.y + 'px';
    }
  }

  let ballObj = new BallClass();


  function startBall() {
    ballObj.speedY = 0;
    ballObj.speedX = 0;
    ballObj.x = fieldObj.width / 2 - ballObj.width / 2;
    ballObj.y = fieldObj.height / 2 - ballObj.height / 2;
    ballObj.setRandomSpeed();
    setInterval( ballObj.startMoving.bind(ballObj), 40 );
  }
  // добавление событий
  btnStart.addEventListener('click', startBall, false);
  window.onkeydown  = function moveRackets(e) {
    e = e || window.event;
    e.preventDefault();
    var step = 20;
    switch (e.keyCode) {
      case 16 :
        if (leftRacket1.y >= step) {
          leftRacket1.y -= step;
        }else {
          leftRacket1.y = 0;
        }
        leftRacket1.leftRacket.style.top = leftRacket1.y + 'px';
        break;
      case 17 :
        let bottomStop = fieldObj.height - leftRacket1.height - step;
        if (leftRacket1.y <= bottomStop) {
          leftRacket1.y += step;
        }else {
          leftRacket1.y = fieldObj.height - leftRacket1.height;
        }
        leftRacket1.leftRacket.style.top = leftRacket1.y + 'px';
        break;
      case 38 :
        if (rightRacket1.y >= step) {
          rightRacket1.y -= step;
        }else {
          rightRacket1.y = 0;
        }
        rightRacket1.rightRacket.style.top = rightRacket1.y + 'px';
        break;
      case 40 :
        let bottomStopR = fieldObj.height - rightRacket1.height - step;
        if (rightRacket1.y <= bottomStopR) {
          rightRacket1.y += step;
        }else {
          rightRacket1.y = fieldObj.height - rightRacket1.height;
        }
        rightRacket1.rightRacket.style.top = rightRacket1.y + 'px';
        break;
    }

  };
}