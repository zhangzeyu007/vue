<!--
 * @Description: 组件
 * @Author: 小鱼
 * @Date: 2020-10-06 23:40:00
 * @LastEditors: 海象
 * @LastEditTime: 2020-11-26 11:35:29
-->
<template>
  <div>
    <!-- 自定义组件的双向绑定 :value @input -->
    <input :type="type" :value="value" @input="onInput" v-bind="$attrs" />
  </div>
</template>

<script>
import emmiter from "../../mixins/emitter";
export default {
  inheritAttrs: false,
  mixins: [emmiter],
  props: {
    type: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    }
  },
  methods: {
    onInput(e) {
      this.$emit("input", e.target.value);
      // 触发校验
      // this.$parent.$emit("validate");
      this.dispatch("KFormItem", "validate");
    }
  }
};
</script>

<style scoped></style>
