class MyModel {
  constructor(city) {
    this.city = city;
    this.myDate = new Date;
    this.currentDate = new Date().toLocaleString('ru-RU',{ timeZone: this.city});
    this.hours = new Intl.DateTimeFormat('ru-RU',{ timeZone: this.city, hour: '2-digit'}).format(this.myDate);
    this.min = new Intl.DateTimeFormat('ru-RU',{ timeZone: this.city, minute: '2-digit'}).format(this.myDate);
    this.sec = new Intl.DateTimeFormat('ru-RU',{ timeZone: this.city, second: '2-digit'}).format(this.myDate);

    setInterval(() => {
      this.myDate = new Date;
      this.currentDate = new Date().toLocaleString('ru-RU',{ timeZone: this.city});
      this.hours = new Intl.DateTimeFormat('ru-RU',{ timeZone: this.city, hour: '2-digit'}).format(this.myDate);
      this.min = new Intl.DateTimeFormat('ru-RU',{ timeZone: this.city, minute: '2-digit'}).format(this.myDate);
      this.sec = new Intl.DateTimeFormat('ru-RU',{ timeZone: this.city, second: '2-digit'}).format(this.myDate);
      console.log('sec' + this.sec);
      if (this.onChangeNotify) {
        this.onChangeNotify();
      }
    }, 1000);
  }

  setOnChangeNotify(onChangeNotify) {
    if (onChangeNotify && typeof(onChangeNotify) !== 'function')
      throw "notify parameter should be a function";

    // Только один слушатель может подписаться на изменение
    // модели
    this.onChangeNotify = onChangeNotify;
  }

  getCurrentDate() {
    return this.currentDate;
  }


  getH() {
    return this.hours;
  }

  getMin() {
    return this.min;
  }

  getS() {
    return this.sec;
  }
}

class MyView {
  constructor(hostElement) {
    this.hostElement = hostElement;
    this.viewElement = null;
    this.checkElement = null;
    this.clock = null;
    this.arrowSec = null;
    this.arrowMin = null;
    this.arrowHours = null;
    this.arrowSecWr = null;
    this.arrowMinWr = null;
    this.arrowHoursWr = null;
    this.timeInsideClock = null;
    this.timeStr = '';
    this.degSec = 96;
    this.degMin = 96;
    this.degH = 96;
  }

  setModel(model) {
    this.model = model;
  }

  setOnCheckboxChanged(onCheckboxChanged) {
    this.onCheckboxChanged = onCheckboxChanged;
  }

  drawClock(){
    this.index = 1;
    this.degrees = 30;
    this.number = 1;
    this.circleWrapper = null;
    this.circle1 = null;
    this.circle2 = null;
    this.clock = document.createElement('div');
    this.clock.className = 'clock';
    this.hostElement.appendChild(this.clock);

    for (let i = 1; i <= 6; i++) {
      this.circleWrapper = document.createElement("div");
      this.circleWrapper.className = 'circleWrapper';
      this.circleWrapper.style.transform = `rotate(${this.degrees}deg)`;
      this.circle1 = document.createElement("div");
      this.circle2 = document.createElement("div");
      this.circle1.innerHTML = `<div class="inner-text">${this.number}</div>`;
      this.circle1.className = `circle circle-${this.index}`;
      this.circle1.querySelector('.inner-text').style.transform = `rotate(${-this.degrees}deg)`;
      ++this.index;
      ++this.number;
      this.circle2.className = `circle circle-${this.index}`;
      this.circleWrapper.appendChild(this.circle1);
      this.circleWrapper.appendChild(this.circle2);
      this.circle2.innerHTML = `<div class="inner-text">${this.number+5}</div>`;
      this.circle2.querySelector('.inner-text').style.transform = `rotate(${-this.degrees}deg)`;
      this.clock.appendChild(this.circleWrapper);
      ++this.index;
      this.degrees += 30;
    }

    this.timeInsideClock = document.createElement('div');
    this.clock.appendChild(this.timeInsideClock);

    //отрисовка секундной стрелки
    this.arrowSecWr = document.createElement('div');
    this.arrowSec = document.createElement('div');
    this.drawArrow(this.arrowSecWr, this.arrowSec, 'sec');

    //отрисовка минутной стрелки
    this.arrowMinWr = document.createElement('div');
    this.arrowMin = document.createElement('div');
    this.drawArrow(this.arrowMinWr, this.arrowMin, 'min');

    //отрисовка часовой стрелки
    this.arrowHoursWr = document.createElement('div');
    this.arrowHours = document.createElement('div');
    this.drawArrow(this.arrowHoursWr, this.arrowHours, 'hours ');
  }

  drawArrow(container, arrow, c) {
    this.container = container;
    this.arrow = arrow;
    this.c = c;
    container.className = 'arrow-wrapper';
    this.clock.appendChild(container);
    arrow.className = 'arrow-'+c;
    container.appendChild(arrow);
  }

  render() {
    if (!this.viewElement) {
      // Представление отрисовывает себя в первый раз
      this.viewElement = document.createElement('div');
      this.hostElement.appendChild(this.viewElement);

      this.checkElement = document.createElement('input');
      this.checkElement.type = 'checkbox';
      this.checkElement.addEventListener('change', e => this.refreshCheckbox());
      this.hostElement.appendChild(this.checkElement);
      this.refreshCheckbox();
    }
    // Каждый раз при вызове метода render происходит перерисовка
    // представления новыми данными из модели
    // представление может читать данные из модели, но не изменять их
    if (this.model) {
      this.viewElement.textContent = this.model.getCurrentDate() + '  ' + this.model.city;

      //clock;
      this.timeStr = this.model.getH() + ':' + this.model.getMin() + ':' + this.model.getS();
      this.timeInsideClock.innerHTML = `<div class="time">${this.timeStr}</div>`;
      //запуск секундной стрелки

      console.log(this.model.getS());
      this.degSec = this.model.getS()*6 + 96;
      this.arrowSecWr.style.transform = `rotate(${this.degSec}deg)`;
      this.degSec += 6;
      if (this.degSec === 456) this.degSec = 96;

      //запуск минутной стрелки
      this.degMin = 90 + this.model.getMin()*6;
      this.arrowMinWr.style.transform = `rotate(${this.degMin}deg)`;
      this.degMin += 6;
      if (this.degMin === 456) this.degMin = 96;

      //запуск часовой стрелки
      this.degH = 90 + this.model.getH()*30 + this.model.getMin()*0.5;
      this.arrowHoursWr.style.transform = `rotate(${this.degH}deg)`;
      this.degH += 30;
      if (this.degH === 450) this.degH = 90;
    }

  }

  refreshCheckbox() {
    // Если изменился флажок, то сообщить подписчикам на
    // это событие и передать состояние флажка: снят или установлен
    if (this.onCheckboxChanged) {
      this.onCheckboxChanged(this.checkElement.checked);
    }
  }
}

class MyController {
  constructor(model, view) {
    view.setModel(model);

    // Только один контроллер может подписаться на изменение
    // флажка
    view.setOnCheckboxChanged(isChecked => this.onCheckboxChanged(isChecked));
    this.model = model;
    view.drawClock();
    view.render();
    this.view = view;
  }

  onCheckboxChanged(isChecked) {
    // контроллер следит за состоянием флажка
    // и перестает перерисовывать представление, если флажок
    // снят
    if (isChecked) {
      this.model.setOnChangeNotify(() => this.view.render());
    } else {
      this.model.setOnChangeNotify(null);
    }
  }
}

class ApplicationController {
  constructor(timeZone) {
    // Запуск и настройка всей страницы
    this.timerController = new MyController(
      new MyModel(timeZone),
      new MyView(document.body)
    );
  }
}

