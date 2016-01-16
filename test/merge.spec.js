import merge from 'merge'

describe('merge()', () => {

  it('exists', () => expect(merge).to.be.ok)

  it('returns a new merged object', () => {
    let a = {one: "test"},
        b = {two: "test"},
        c = {one: "test", two: "test"}
    expect(merge(a, b)).to.deep.equal(c)
  })

})
