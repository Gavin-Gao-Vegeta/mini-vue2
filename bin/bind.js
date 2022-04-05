/*
 * @Descripttion: 
 * @version: 0.0.0
 * @Author: gavin
 * @Date: 2022-03-30 21:56:02
 * @LastEditors: gavin
 * @LastEditTime: 2022-04-03 21:40:27
 */
//响应式数据
//1.原始方式更新数据
let a = 10
let b = a + 5
console.log(b)
a = 20
b = a + 5
console.log(b)
//2.绑定数据
let c = {}
let value = 20

// Object.defineProperty->'上帝的钥匙',方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。
Object.defineProperty(c, 'value', {
  get() {
    return 'this is binding value ' + value
  },
  set: function(val) {
    value += val
  }
})
Object.defineProperty(c, 'b', {
  value: 515,
})

console.log(c.value)
c.value = 30
console.log(c.value)
for (const key in c) {
  if (Object.hasOwnProperty.call(c, key)) {
    const element = c[key];
    console.log(element)
  }
}

// 全局变量保存修改的值
var temp;
Object.defineProperty(c, 'foo', {
  get() {
    return temp;
  },
  set(newValue) {
    temp = newValue
  }
})
c.foo = 10
console.log(c.foo)
c.foo = 20
console.log(c.foo)

