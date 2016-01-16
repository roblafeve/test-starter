import merge from 'merge'

let defaultDeps = {
  generateId: (a) => a,
  HttpService: function() {
    this.get = (id) => ({data: {id: id}})
  }
}

export default function swappableDeps(arg, passedDeps = defaultDeps) {
  let { generateId, HttpService } = merge(defaultDeps, passedDeps)
  return new HttpService().get(generateId(arg))
}
