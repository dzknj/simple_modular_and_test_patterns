const Greet = module.exports = function(name) {
  return 'hello, ' + (name || 'Jersey Dave');
};

Greet.prototype.defaultName = 'Jersey Dave';

Greet.prototype.userName = (process.argv[2] || 'no user name added');

Greet.prototype.hello = function() {
  return 'hello, ' + this.defaultName;
};

const greet = new Greet('Jersey Dave');

process.argv[2] ? console.log(Greet(process.argv[2])) : console.log(greet.hello());
