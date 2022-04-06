/*
 * @Descripttion: 
 * @version: 0.0.0
 * @Author: gavin
 * @Date: 2022-04-05 09:25:08
 * @LastEditors: gavin
 * @LastEditTime: 2022-04-05 09:52:10
 */
import defineReactive from './defineReactive.js';
import Observer from './Observer.js';
let obj = {
  a: {
    m: {
      n: 5
    }
  }
}

// 创建observe函数
function observe(value) {
  //如果value不是对象，则返回
  console.log(typeof value)
  if (typeof value != 'object') return;
  let ob;
  if (typeof value.__ob__ !== 'undefined') {
    ob = value.__ob__;
  } else {
    ob = new Observer(value);
  }
  return ob;
}
console.log(123)
observe(obj)