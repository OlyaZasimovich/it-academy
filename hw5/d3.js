"use strict";
{
  const formDef1=
    [
      {label:'Название сайта:',kind:'longtext',name:'sitename'},
      {label:'URL сайта:',kind:'longtext',name:'siteurl'},
      {label:'Посетителей в сутки:',kind:'number',name:'visitors'},
      {label:'E-mail для связи:',kind:'shorttext',name:'email'},
      {label:'Рубрика каталога:',kind:'combo',name:'division',
        variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
      {label:'Размещение:',kind:'radio',name:'payment',
        variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
      {label:'Разрешить отзывы:',kind:'check',name:'votes'},
      {label:'Описание сайта:',kind:'memo',name:'description'},
      {label:'Опубликовать:',kind:'submit'},
    ];

  const formDef2=
    [
      {label:'Фамилия:',kind:'longtext',name:'lastname'},
      {label:'Имя:',kind:'longtext',name:'firstname'},
      {label:'Отчество:',kind:'longtext',name:'secondname'},
      {label:'Возраст:',kind:'number',name:'age'},
      {label:'Зарегистрироваться:',kind:'submit'},
    ];


  function madeForm(arrayProperty) {
    if (arrayProperty) {
      var myForm = document.createElement("form");
      document.body.appendChild(myForm);
    }
    arrayProperty.forEach(function (value){
      for (let key in value) {
        switch (key) {
          case "label":
            var elementLabel = document.createElement('label');
            elementLabel.innerText = `${value[key]}`;
            myForm.appendChild(elementLabel);
            break;
          case "kind":
            switch (value[key]) {
              case 'longtext':
                var elementInput = document.createElement("input");
                elementInput.setAttribute('type', 'text');
                elementInput.style.width = "500px";
                break;
              case 'number':
                var elementInput = document.createElement("input");
                elementInput.setAttribute('type', value[key]);
                elementInput.style.width = "100px";
                break;
              case 'shorttext':
                var elementInput = document.createElement("input");
                elementInput.setAttribute('type', 'text');
                elementInput.style.width = "300px";
                break;
              case 'combo':
                var elementSelect = document.createElement("select");
                myForm.appendChild(elementSelect);
                if (value.variants) {
                  value.variants.forEach(function(item){
                    const elementOption = document.createElement('option');
                    elementSelect.appendChild(elementOption);
                    elementOption.innerText = `${item.text}`;
                    elementOption.setAttribute('value', item.value);
                  });
                }
                break;
              case 'radio':
                if (value.variants) {
                  value.variants.forEach(function(item){
                    const elementRadio = document.createElement("input");
                    const elementSpan = document.createElement('span');
                    elementLabel.appendChild(elementRadio);
                    elementLabel.appendChild(elementSpan);
                    elementSpan.innerText = `${item.text}`;
                    elementRadio.setAttribute('type', value.kind);
                    elementRadio.setAttribute('value', item.value);
                    elementRadio.setAttribute('name', value.name);
                  });
                }
                break;
              case 'check':
                var elementInput = document.createElement("input");
                elementInput.setAttribute('type', 'checkbox');
                break;
              case 'memo':
                var elementTextarea = document.createElement("textarea");
                break;
              case 'submit':
                var elementInput = document.createElement("input");
                elementInput.setAttribute('type', value[key]);
                break;
            }
            if (elementInput) elementLabel.appendChild(elementInput);
            if (elementSelect) elementLabel.appendChild(elementSelect);
            if (elementTextarea) elementLabel.appendChild(elementTextarea);
            break;
          case "name":
            if (elementInput) elementInput.setAttribute(key, value[key]);
            if (elementSelect) elementSelect.setAttribute(key, value[key]);
            if (elementTextarea) elementTextarea.setAttribute(key, value[key]);
            break;
          case "variants":

            break;
          default:
            alert( 'Я таких значений не знаю' );
        }
      }
    });

  }

  madeForm(formDef2);
}
