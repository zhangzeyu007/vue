<!--
 * @Description: 组件
 * @Author: 海象
 * @Date: 2020-10-08 21:27:42
 * @LastEditors: 海象
 * @LastEditTime: 2020-10-09 10:35:01
-->
<template>
  <div class="kkb-tree">
    <tree-node v-for="item in data" :key="item.title" :model="item" />
  </div>
</template>

<script>
import TreeNode from "@/components/recursion/TreeNode.vue";
export default {
  components: {
    TreeNode
  },
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.kkb-tree {
  text-align: left;
}
</style>
