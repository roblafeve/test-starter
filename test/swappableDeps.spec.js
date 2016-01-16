import swappableDeps from 'swappableDeps'

describe('swappableDeps()', () => {

  it('exists', () => {
    expect(swappableDeps).to.be.ok
  })

  it('loads default dependencies', () => {
    expect(swappableDeps(10)).to.deep.equal({data: {id: 10}})
  })

  it('allows dependency swapping', () => {
    let deps = {
      generateId: (arg) => arg * 2,
      HttpService: function() {
        this.get = (id) => ({data: {id: id, pet: 'lion'}})
      }
    }
    expect(swappableDeps(10, deps)).to.deep.equal({data: {id: 20, pet: 'lion'}})
  })

  it('merges swapped deps with default deps', () => {
    let deps = {
      HttpService: function() {
        this.get = (id) => ({data: {id: id, pet: 'lion'}})
      }
    }
    expect(swappableDeps(10, deps)).to.deep.equal({data: {id: 10, pet: 'lion'}})
  })

})
