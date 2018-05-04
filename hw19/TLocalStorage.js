class TLocalStorage {
  constructor(id) {
    this.id = id;
  }

  getData(whereUse) {
    this.whereUse = whereUse;
    console.log(whereUse);
    let savedDataDrinks = localStorage[this.id];
    let sDataDrinks = null;
    if (savedDataDrinks) {
      sDataDrinks = JSON.parse(savedDataDrinks);
    }
    for (let key in sDataDrinks) {
      this.whereUse.HashStorage.addValue(key, sDataDrinks[key]);
    }
  }

  setData(data) {
    this.data = data;
    localStorage[this.id] = JSON.stringify(this.data);
  }
}