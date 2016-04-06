const Greet = module.exports = function(name) {
  this.sayHi = 'Hello, ';
  this.name = name;
};
Greet.prototype.hello = function() {
  return this.sayHi + this.name;
};
const greet = new Greet('Jersey Dave');
console.log(greet.hello());
console.log('Hello',process.argv[2]);
