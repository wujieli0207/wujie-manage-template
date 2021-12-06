<template>
  <div class="table">
    <el-table
      border
      size="small"
      :data="data"
      :row-key="rowKey"
      v-bind="$attrs"
      :handle-selection-change="handleSelectionChange()"
    >
      <el-table-column v-if="allowSelect" type="selection" width="55"></el-table-column>
      <template v-for="item in columns">
        <el-table-column v-if="item.slot" v-bind="item" :key="item.prop">
          <template #header>
            <slot :name="item.slot.header">
              {{ item.label || "自定义header" }}
            </slot>
          </template>
          <template #default="scope">
            <slot :name="item.slot.body" :data="scope.row">
              {{ scope.row[item.prop] || "需要自定义" }}
            </slot>
          </template>
        </el-table-column>
        <el-table-column v-else v-bind="item" :key="item.prop"></el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "basicTable",
    props: {
      allowSelect: {
        type: Boolean,
        default: false,
      },
      columns: {
        type: Array,
        default: () => [],
      },
      data: {
        type: Array,
        default: () => [],
      },
      rowKey: {
        type: String,
        default: "id",
      },
      showPaging: {
        type: Boolean,
        default: false,
      },
    },
    setup: (props, context) => {
      let multipleSelection = [];
      /**
       * @description 获取已选择表格的数据
       */
      const handleSelectionChange = (val: Array<any>): void => {
        multipleSelection = val;
        context.emit("select", multipleSelection);
      };

      /**
       * @description 获取翻页数据
       * TODO 翻页数据待添加
       */
      const handlePagingChange = (option: any): void => {
        context.emit("pagingChange", option);
      };

      return {
        handleSelectionChange,
        handlePagingChange,
      };
    },
  });
</script>
