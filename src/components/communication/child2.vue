<!--
 * @Description: 组件
 * @Author: 小鱼
 * @Date: 2020-10-06 18:34:12
 * @LastEditors: 海象
 * @LastEditTime: 2020-11-20 16:15:54
-->
<template>
  <div class="child2">
    <h2>Child2</h2>
    {{ $attrs.msg }}
    <!-- 隔代传参, v-bind 会展开 $attrs -->
    <Grandson v-bind="$attrs" v-on="$listeners" />
    <button @click="sendToChild1">给child1发送消息</button>
  </div>
</template>

<script>
import Grandson from "./Grandson";

export default {
  components: {
    Grandson
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    sendToChild1() {
      // 利用事件总线发送事件
      this.$bus.$emit("event-from-child2", "some msg from child2");
    }
  }
};
</script>

<style scoped></style>
