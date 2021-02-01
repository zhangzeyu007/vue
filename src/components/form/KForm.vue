<!--
 * @Description: 组件
 * @Author: 小鱼
 * @Date: 2020-10-06 23:40:58
 * @LastEditors: 海象
 * @LastEditTime: 2020-12-12 23:10:40
-->
<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "KForm",
  componentName: "KForm",
  provide() {
    return {
      form: this
    };
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: Object
  },
  created() {
    this.fields = [];
    this.$on("kkb.form.addField", item => {
      this.fields.push(item);
    });
  },
  methods: {
    validate(cb) {
      // 检查所有的表单项目
      // 他们都要校验通过
      // const tasks = this.$children
      //   .filter(item => item.prop) // 必须拥有prop属性的FromItem留下
      //   .map(item => item.validate());

      const tasks = this.fields.map(item => item.validate());
      Promise.all(tasks)
        .then(() => cb(true))
        .catch(() => cb(false));
    }
  }
};
</script>

<style scoped></style>
