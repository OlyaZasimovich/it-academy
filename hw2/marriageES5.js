"use strict";
function Person(name) {
  this.name = name;
}
Person.prototype.getMarry = function (p) {
  if (p && this.marriedOn !== p && this.constructor.name !== p.constructor.name) {
    this.marriedOn = p;
    p.getMarry(this);
  }
}
Person.prototype.whoIsMarried = function (){
    console.log(this.name + " > " + (this.marriedOn && this.marriedOn.name || 'none'));
}
function Woman(name) {
  this.superConstructor.call(this, name);
}
function Man(name) {
  this.superConstructor.call(this, name);
}
var f = function () {};
f.prototype = Person.prototype;
Woman.prototype = new f ();
Woman.prototype.constructor = Woman;
Woman.prototype.super = f.prototype;
Woman.prototype.superConstructor = Person;
Man.prototype = new f ();
Man.prototype.constructor = Man;
Man.prototype.super = f.prototype;
Man.prototype.superConstructor = Person;

var woman = new Woman('Katya');
var man = new Man('Pasha');
var anotherMan = new Man('Kolyan');

woman.whoIsMarried();
man.getMarry(woman);
man.whoIsMarried();
woman.whoIsMarried();
anotherMan.getMarry(man);
man.whoIsMarried();
anotherMan.whoIsMarried()



