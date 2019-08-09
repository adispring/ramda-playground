import * as R from 'ramda'

const map = (transformer, list) => {
  const result = []
  for (let item of list) {
    result.push(transformer(item))
  }
  return result
}

// 返回值为函数：add 函数的返回值是一个函数
const add = a => {
  return b => a + b
}
// const add = a => b => a + b
const inc = add(1)
inc(2) // 输出 3

// map 接受函数 inc 作为其映射函数
const mapInc = list => map(inc, list)
const nums = [1, 2, 3, 4]
mapInc(nums) // 输出 [2, 3, 4]
console.log(mapInc(nums))
