<template>
  <div class="basic-table-demo">
    <basic-table :columns="columns" :data="data" :allowSelect="false"></basic-table>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, toRefs } from "vue";
  import basicTable from "/@/components/basicTable/index.vue";

  export default defineComponent({
    name: "BasicTableDemo",
    components: {
      basicTable,
    },
    setup: () => {
      const state = reactive({
        columns: [
          {
            prop: "id",
            label: "ID",
            width: "55",
            align: "center",
          },
          {
            prop: "name",
            label: "用户名",
            width: "200",
            align: "center",
          },
          {
            prop: "money",
            label: "账户余额",
            width: "300",
            align: "center",
          },
        ],
        data: [
          {
            id: 1,
            name: "张三",
            money: 123,
            // address: "广东省东莞市长安镇",
            // state: "成功",
            // date: "2019-11-1",
            // thumb: "https://lin-xin.gitee.io/images/post/wms.png",
          },
          {
            id: 2,
            name: "李四",
            money: 456,
            // address: "广东省广州市白云区",
            // state: "成功",
            // date: "2019-10-11",
            // thumb: "https://lin-xin.gitee.io/images/post/node3.png",
          },
        ],
      });

      return {
        ...toRefs(state),
      };
    },
  });
</script>
