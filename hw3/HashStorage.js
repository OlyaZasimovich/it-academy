
class HashStorage {
  addValue(key,value){
    if (key && value) {
      this[key] = value;
    } else {
      return false
    }
  }
  getValue(key){
    if (key) {
      return this[key];
    } else {
      return false
    }
  }
  deleteValue(key){
    if (key) {
      delete this[key];
    } else {
      return false
    }
  }
  getKeys(){
    let keyArray = [];
    for (let k in this) {
      if (k) {
        keyArray.push(k);
      }
    }
    return keyArray;
  }
}
class drinkStorage {
  constructor() {
    this.HashStorage = new HashStorage();
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
      this.HashStorage.addValue(name,obj);
    } else {
      alert('Enter the values');
    }

    (function resetMainFrom() {
      document.getElementById('main-form').reset();
    })();
    console.log(this);
  }


  getValue(){
    let infoField = document.getElementById('info').value;
    let infoBlock = document.getElementById('text-info');
    if (infoBlock.childNodes.length !== 0) {
      infoBlock.innerHTML = '';
    }
    let yourRecipeObj = this.HashStorage.getValue(infoField);

    if (!(infoField in this.HashStorage)) {
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
    if (!(deleteField in this.HashStorage)) {
      alert('Такого напитка нет в хранилище');
    } else {
      this.HashStorage.deleteValue(deleteField);
      alert('Информация о напитке удалена');
    }
    (function() {
      document.getElementById('delete-form').reset();
    })()
  }


  getKeys(){
    let listOfCocktails = this.HashStorage.getKeys();
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
    this.HashStorage.getKeys();
  }
}

var drinkTable = new drinkStorage;


