var assert = require('assert');
var should = require('chai').should();
describe('Simple String Test', function () {
 it('should return number of charachters in a string', function () {
        assert.equal("Hello World!".length, 12);
    });
});

var numbers = [1, 2, 3, 4, 5];
numbers.should.be.an('array').that.includes(2);
numbers.should.have.lengthOf(5);
