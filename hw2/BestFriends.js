"use strict";
class Person {
  constructor(name){
    this.name = name;
    this.friends = [];
  }

  setBestFriends(...rest){
    if (rest.length !== 0) {
      for (let i = 0; i < rest.length; i++) {
        if (this.friends.indexOf(rest[i]) === -1 && this !== rest[i]) {
          this.friends.push(rest[i]);
          rest[i].setBestFriends(this);
        }
      }
    }
  }

  whoIsMyBestFriends() {
    let friendsString = '';
    if (this.friends){
      for (let i = 0; i < this.friends.length; i++) {
        friendsString = `${friendsString} ${this.friends[i].name}`;
      }
    }
    console.log(this.name + " > " + (friendsString || 'none'));
  }
}

var sergey = new Person('Sergey');
var sasha = new Person('Sasha');
var vasya = new Person('Vasya');

sergey.setBestFriends(sasha, vasya);

sergey.whoIsMyBestFriends();
vasya.whoIsMyBestFriends();
sasha.whoIsMyBestFriends();

