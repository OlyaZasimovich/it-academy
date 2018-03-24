class Person {
  constructor(name){
    this.name = name;
  }

  getMarry(p){
    if (p && this.bestFriend != p && this.constructor.name !== p.constructor.name) {
      this.bestFriend = p;
      p.getMarry(this);
    }
  }

  whoIsMarried() {
    console.log(this.name + " > " + (this.bestFriend && this.bestFriend.name || 'none'));
  }
}

class Woman extends Person {
  constructor(name) {
    super(name);
  }
}

class Man extends Person {
  constructor(name) {
    super(name);
  }
}

var woman = new Woman('Katya');
var man = new Man('Pasha');
var anotherMan = new Man('Kolyan');

woman.whoIsMarried();
man.getMarry(woman);
man.whoIsMarried();
woman.whoIsMarried();
anotherMan.getMarry(man);
man.whoIsMarried();
anotherMan.whoIsMarried();

