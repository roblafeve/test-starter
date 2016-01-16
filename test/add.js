var expect = require('chai').expect;
var add = require('../src/add');

describe('add()', function() {

  it('should exist', function() {
    (1 + 2).should.equal(3)
  })

  it('should add two numbers', function() {
    expect(add(1, 2)).to.equal(3)
  })
  it('should add three numbers', function() {
    expect(add(1, 2, 3)).to.equal(6)
  })
  it('should not add strings')

})
