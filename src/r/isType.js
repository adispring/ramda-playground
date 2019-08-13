import * as R from 'ramda'

const str = 'hello, world'
const arr = [1, 2, 3]
const obj = {
  a_b: 1,
  b_c: 2
}

const arr2 = [obj]

console.log(R.is(Object, str))
console.log(R.is(Object, arr))
console.log(R.is(Object, obj))
console.log('hi')