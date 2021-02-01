<!--
 * @Description: 组件
 * @Author: 小鱼
 * @Date: 2020-10-06 18:51:05
 * @LastEditors: 海象
 * @LastEditTime: 2020-12-13 18:39:09
-->
<template>
  <div class="Grandson" @click="$emit('some-event', 'some msg from grandsome')">
    <h3>Grandson</h3>
    <p>{{ msg }}</p>
    <!-- inject 用法 -->
    <p>{{ foo1 }}</p>
  </div>
</template>

<script>
export default {
  inject: {
    foo1: {
      from: "foo"
    }
  },
  props: {
    msg: {
      type: String,
      default: ""
    }
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped></style>
