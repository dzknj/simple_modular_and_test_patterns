const chai = require('chai');
const expect = chai.expect;
const Greet2 = require(__dirname + '/../lib/modname');

const greet = new Greet2('Jersey Dave');

describe('sayHi', ()=> {
  it('should say Hello,', ()=> {
    expect(greet.sayHi).to.eql('Hello, ');
  });
});
describe('name', ()=> {
  it('should say Jersey Dave', ()=> {
    expect(greet.name).to.eql('Jersey Dave')
  });
});
describe('command line argument', ()=> {
  it('should say input argument after command node modname.js "value" but when run with mocha will say undefined',()=> {
    expect(process.argv[2]).to.eql(process.argv[2]);
  });
});
