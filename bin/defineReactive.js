/*
 * @Descripttion: 
 * @version: 0.0.0
 * @Author: gavin
 * @Date: 2022-04-03 21:36:45
 * @LastEditors: gavin
 * @LastEditTime: 2022-04-05 09:49:24
 */
// 利用闭包——>函数
// let obj = {
//   a: {
//     m: {
//       n: 5
//     }
//   }
// }
// defineReactive(obj, 'a.m.n', 20)
// console.log(obj.a.m.n)
function defineReactive(data, key, val) {
  if (arguments.length <= 2) {
    val = data[key]
  }
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get() {
      return val;
    },
    set(newValue) {
      if (val === newValue) {
        return
      }
      val = newValue
    }
  })
}
export default {
  defineReactive
};