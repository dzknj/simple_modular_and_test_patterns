const chai = require('chai');
const expect = chai.expect;
const Greet2 = require(__dirname + '/../lib/modname');

const greet = new Greet2('Jersey Dave');

describe('default hello', ()=> {
  it('should say "hello, Jersey Dave"', ()=> {
    expect(greet.hello()).to.eql('hello, ' + greet.defaultName);
  });
});
describe('command line argument, AKA: user-name param added', ()=> {
  it('should say "hello, \'user-name input\'"', ()=> {
    expect(greet.userName).to.eql(process.argv[2] || 'no user name added');
  });
});
