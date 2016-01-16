import dep from 'dep'

describe('dep()', function() {

  it('exists', () => {
    expect(dep).to.exist
  })

  it("returns a", () => {
    expect(dep(1)).to.equal(1)
  })

  it("returns a + b if b", () => {
    expect(dep(1, 1)).to.equal(2)
  })

})
