/*
 * @Descripttion: 
 * @version: 0.0.0
 * @Author: gavin
 * @Date: 2022-04-03 21:36:45
 * @LastEditors: gavin
 * @LastEditTime: 2022-04-03 21:42:37
 */
// 利用闭包——>函数
let obj = {}

function defineReactive(data, key, val) {
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
defineReactive(obj, 'a', 10)
console.log(obj.a)