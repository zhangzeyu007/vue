/*
 * @Description: 组件
 * @Author: 海象
 * @Date: 2020-10-10 21:34:47
 * @LastEditors: 海象
 * @LastEditTime: 2020-10-13 00:48:03
 */

let _Vue;
// 1.实现插件
class Store {
  constructor(options) {
    console.log(options);
    this._mutations = options.mutations;
    this._actions = options.actions;
    // 创建响应式的state
    this._vm = new _Vue({
      data() {
        // 不希望被代理, 就加上$
        return {
          $$state: options.state
        };
      }
    });

    // 修改this的指向
    this.commit = this.commit.bind(this);
    this.dispatch = this.dispatch.bind(this);
  }
  get state() {
    return this._vm._data.$$state;
  }
  set state(v) {
    console.error("please use replaceState to reset state");
  }
  // 修改state
  commit(type, payload) {
    // console.log(this._mutations);
    const entry = this._mutations[type];
    if (!entry) {
      console.log("unknown mutation");
      return;
    }

    // 传入state作为参数
    entry(this.state, payload);
  }

  dispatch(type, payload) {
    //  获取type对应的 actions
    const fn = this._actions[type];
    if (!fn) {
      console.log("unknown actions");
      return;
    }

    // 传入当前的Store实例做上下文
    fn(this, payload);
  }
}

function install(Vue) {
  _Vue = Vue;
  _Vue.mixin({
    beforeCreate() {
      if (this.$options.store) {
        // console.log(this.$options);
        Vue.prototype.$store = this.$options.store;
      }
    }
  });
}

// 导出的对象就是 vuex
export default { Store, install };
