<!--
 * @Description: 组件
 * @Author: 海象
 * @Date: 2020-10-08 21:24:12
 * @LastEditors: 海象
 * @LastEditTime: 2020-10-09 10:43:54
-->
<template>
  <Tree :data="treeData" />
</template>

<script>
import Tree from "@/components/recursion/Tree.vue";
export default {
  components: {
    Tree
  },
  data() {
    return {
      treeData: [
        {
          title: "Web全栈架构师",
          children: [
            {
              title: "Java架构师"
            },
            {
              title: "JS高级",
              children: [
                {
                  title: "ES6"
                },
                {
                  title: "动效"
                }
              ]
            },
            {
              title: "Web全栈",
              children: [
                {
                  title: "Vue训练营",
                  expand: true,
                  children: [
                    {
                      title: "组件化"
                    },
                    {
                      title: "源码"
                    },
                    {
                      title: "docker部署"
                    }
                  ]
                },
                {
                  title: "React",
                  children: [
                    {
                      title: "JSX"
                    },
                    {
                      title: "虚拟DOM"
                    }
                  ]
                },
                {
                  title: "Node"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped></style>
