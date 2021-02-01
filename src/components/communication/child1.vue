<!--
 * @Description: 组件
 * @Author: 小鱼
 * @Date: 2020-10-06 18:34:03
 * @LastEditors: 小鱼
 * @LastEditTime: 2020-10-06 21:47:03
-->
<template>
  <div class="child1" @click="$emit('some-event', 'msg from child1')">
    <h2>child1</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.$bus.$on("event-from-child2", msg => {
      console.log("child1", msg);
    });
  },
  methods: {}
};
</script>

<style scoped></style>
