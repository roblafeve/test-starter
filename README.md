# Test Starter

A simple starter project to get you up and testing JavaScript

## Tools Used

- [Mocha](https://mochajs.org) - test runner
- [Chai](http://chaijs.com) - assertion library
- [Isparta](https://github.com/douglasduteil/isparta) - ES6 test coverage analysis via [istanbul](https://github.com/gotwarlost/istanbul)
- [Babel](https://babeljs.io) - write ES6 code—because why not?

## Setup

1. `npm install` - get all the stuff
2. `npm run test` - starts watching your code and displays results in the console _(restart this if you add new files)_
3. `npm run cover` - runs your test suite and displays test coverage report in the console. It starts out at 100% _(not a practical percentage in a real project)_, so anything below that is your fault ;)

## Notes
- Tests live in `tests`
- Notice that native module import/export is being used.
- Normally you would need to reference module imports with a relative or absolute path. For convenience, `./src` has been set as the `NODE_PATH`, imports will attempt to resolve their first.
