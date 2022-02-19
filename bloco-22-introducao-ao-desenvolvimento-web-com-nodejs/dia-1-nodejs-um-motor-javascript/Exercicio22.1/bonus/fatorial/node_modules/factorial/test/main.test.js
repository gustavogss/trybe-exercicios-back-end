var factorial = require('../');
var test_data = require('./test_data')

describe('factorial', function() {

  var warn
  beforeEach(() => {
    warn = console.warn
    console.warn = jest.fn()
  })

  afterEach(() => {
    console.warn = warn
  })

  Object.keys(test_data).forEach((number) => {
    if (Math.abs(number) <= 18) {
      it(`should work with ${number} without BigInt`, function() {
        expect(factorial(number).toString()).toEqual(test_data[number].toString());
        expect(console.warn).not.toHaveBeenCalled()
      })
    } else {
      it(`should warn for numbers >18, <-18 that don't use BigInt (${number})`, function() {
        factorial(number)
        expect(console.warn).toHaveBeenCalledWith('For accurately calculating factorials more than 18! or less than -18!, please set `useBigInt` to true.')
      })
    }

    it(`should work with ${number} with BigInt`, function() {
      expect(factorial(number, {useBigInt: true})).toEqual(test_data[number]);
      expect(console.warn).not.toHaveBeenCalled()
    })
  })
});
