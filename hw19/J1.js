'use strict';
{

  class drinkStorage {
    constructor() {
      this.TLocalStorage = new TLocalStorage('drink');
    }
    addValue(){
      let name = document.getElementById("nameOfCocktail").value;
      let alcohol = document.getElementById("alcoholic").checked;
      let rec = document.getElementById('recipe').value;
      let obj = {
        'alcoholic' : alcohol ? 'yes' : 'no',
        'recipe' : rec,
      };

      if (name && rec) {
        this.TLocalStorage.addValue(name,obj);
      } else {
        alert('Enter the values');
      }

      (function resetMainFrom() {
        document.getElementById('main-form').reset();
      })();

    }
    getValue(){
      let infoField = document.getElementById('info').value;
      let infoBlock = document.getElementById('text-info');
      if (infoBlock.childNodes.length !== 0) {
        infoBlock.innerHTML = '';
      }
      let yourRecipeObj = this.TLocalStorage.getValue(infoField);

      if (!(infoField in this.TLocalStorage.lsParse)) {
        alert('Такого напитка нет в хранилище');
      } else {
        for (let key in yourRecipeObj) {
          let yourRecipeStr = `${key}:  ${yourRecipeObj[key]}`;
          let block = document.createElement("DIV");
          let t = document.createTextNode(yourRecipeStr);
          block.appendChild(t);
          infoBlock.appendChild(block);
        }
      }
      (function() {
        document.getElementById('info-form').reset();
      })();
    }
    deleteValue(){
      let deleteField = document.getElementById('delete').value;
      if (!(deleteField in this.TLocalStorage.lsParse)) {
        alert('Такого напитка нет в хранилище');
      } else {
        this.TLocalStorage.deleteValue(deleteField);
        alert('Информация о напитке удалена');
      }
      (function() {
        document.getElementById('delete-form').reset();
      })()
    }
    getKeys(){
      let listOfCocktails = this.TLocalStorage.getKeys();
      let allCocktailsFrom = document.getElementById('list-cocktails');

      if (allCocktailsFrom.childNodes.length !== 0) {
        allCocktailsFrom.innerHTML = '';
      }

      if (listOfCocktails.length === 0) {
        alert('Нет напитков в хранилище');
      } else {
        for (let i = 0; i < listOfCocktails.length; i++) {
          let yourCocktailStr = listOfCocktails[i];
          let allCocktailsBlock = document.createElement("DIV");
          let t = document.createTextNode(yourCocktailStr);
          allCocktailsBlock.appendChild(t);
          allCocktailsFrom.appendChild(allCocktailsBlock);
        }
      }
      this.TLocalStorage.getKeys();
    }
  }

  class dishesStorage {
    constructor() {
      this.TLocalStorage = new TLocalStorage('dish');
    }

    addValue(){
      let name = document.getElementById("nameOfDish").value;
      let rec = document.getElementById('dishRecipe').value;
      let obj = {
        'recipe' : rec,
      };
      if (name && rec) {
        this.TLocalStorage.addValue(name,obj);
      } else {
        alert('Enter the values');
      }
      (function resetMainFrom() {
        document.getElementById('main-form-dish').reset();
      })();
    }

    getValue(){
      let infoField = document.getElementById('info-dish').value;
      let infoBlock = document.getElementById('text-info-dish');
      if (infoBlock.childNodes.length !== 0) {
        infoBlock.innerHTML = '';
      }
      let yourRecipeObj = this.TLocalStorage.getValue(infoField);
      if (!(infoField in this.TLocalStorage.lsParse)) {
        alert('Такого блюда нет в хранилище');
      } else {
        for (let key in yourRecipeObj) {
          let yourRecipeStr = `${key}:  ${yourRecipeObj[key]}`;
          let block = document.createElement("DIV");
          let t = document.createTextNode(yourRecipeStr);
          block.appendChild(t);
          infoBlock.appendChild(block);
        }
      }
      (function() {
        document.getElementById('info-form-dish').reset();
      })();
    }


    deleteValue(){
      let deleteField = document.getElementById('delete-dish').value;
      if (!(deleteField in this.TLocalStorage.lsParse)) {
        alert('Такого блюда нет в хранилище');
      } else {
        this.TLocalStorage.deleteValue(deleteField);
        alert('Информация о блюде удалена');
      }
      (function() {
        document.getElementById('delete-form-dish').reset();
      })()
    }


    getKeys(){
      let listOfCocktails = this.TLocalStorage.getKeys();
      let allCocktailsFrom = document.getElementById('list-dish');

      if (allCocktailsFrom.childNodes.length !== 0) {
        allCocktailsFrom.innerHTML = '';
      }

      if (listOfCocktails.length === 0) {
        alert('Нет блюд в хранилище');
      } else {
        for (let i = 0; i < listOfCocktails.length; i++) {
          let yourCocktailStr = listOfCocktails[i];
          let allCocktailsBlock = document.createElement("DIV");
          let t = document.createTextNode(yourCocktailStr);
          allCocktailsBlock.appendChild(t);
          allCocktailsFrom.appendChild(allCocktailsBlock);
        }
      }
      this.TLocalStorage.getKeys();
    }
  }

  var drinkTable = new drinkStorage();

  var dishesTable = new dishesStorage();
}
