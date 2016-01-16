import add from 'add'

describe('add()', function() {

  it('exists', () => {
    expect(add).to.exist
  })

  it('adds things', () => {
    expect(add(1, 1)).to.equal(2)
  })

})
