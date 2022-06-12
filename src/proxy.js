// new Proxy 代理学习
// 基础实例
const handler = {
  get: function (obj, prop) {
    return prop in obj ? obj[prop] : 37;
  },
};

const p = new Proxy({}, handler);
console.log(handler);
console.log(p);
p.a = 1;
p.b = undefined;
console.log(p.a, p.b, "proxy p");
console.log("c" in p, p.c);
console.log(p.d);
console.log(handler);

console.log("无操作转发");
const target = {};
let targetProxy = new Proxy(target, {
  get: function (obj, prop) {
    // obj为target对象，
    // prop为获取的对象参数key
    if (!(prop in obj)) {
      // 获取的属性不存在
      throw new Error("获取的参数不存在");
    }
    return obj[prop];
  },
  set: function (obj, prop, value) {
    console.log(obj, prop, value);
    obj[prop] = value;
  },
});
targetProxy.a = 37;
Reflect.ownKeys(target, "Reflect");
console.log(targetProxy.a);
console.log(target.a);
