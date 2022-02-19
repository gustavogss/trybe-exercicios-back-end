module.exports = function factorial(n, opt={}) {
  function bigInt(i) {
    return opt.useBigInt ? BigInt(i) : i
  }

  var sign = bigInt(Math.sign(n))
  n = bigInt(Math.abs(n))
  if (n > 18 && !opt.useBigInt) console.warn('For accurately calculating factorials more than 18! or less than -18!, please set `useBigInt` to true.')
  if (n == 0) return bigInt(1)
  for (var r = bigInt(1); n > 1; n--) r *= n
  return r * sign
}
