import * as R from 'ramda'

import { removeFirstWhen } from './utils/common'

const numbers = [1, 2, 3, 4, 5]
const isEven = x => x % 2 === 0
const result = removeFirstWhen(isEven, numbers)
console.log(result)
