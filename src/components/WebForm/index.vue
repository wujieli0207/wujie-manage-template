<template>
  <div class="web-form">
    <el-form ref="webFormRef" :model="form" :label-width="labelWidth">
      <el-form-item
        v-for="item in formField"
        :key="item.value"
        :label="item.label"
        :prop="item.value"
        :rules="{
          required: item.require,
          message: item.errMsg || item.placeholder || item.label + '是毕录项',
          trigger: 'change',
        }"
      >
        <template v-if="['input', 'textarea'].includes(item.type)">
          <el-input
            :type="item.type"
            v-bind="item.other"
            v-model="form[item.value]"
            :placeholder="item.placeholder"
          />
        </template>
        <template v-if="item.type === 'select'">
          <el-select v-model="form[item.value]" placeholder v-bind="item.other">
            <template v-for="op in item.options">
              <el-option
                v-if="op && item.selectValue && item.selectLabel"
                :key="op[item.selectValue]"
                :label="op[item.selectLabel]"
                :value="op[item.selectValue]"
              ></el-option>
            </template>
          </el-select>
        </template>
        <template v-if="item.type === 'radio'">
          <el-radio-group v-model="form[item.value]" v-bind="item.other">
            <template v-for="op in item.options">
              <el-radio
                v-if="op && item.selectValue && item.selectLabel"
                :key="op[item.selectValue]"
                :label="op[item.selectLabel]"
                :value="op[item.selectValue]"
                >{{ op[item.selectValue] }}</el-radio
              >
            </template>
          </el-radio-group>
        </template>
        <template v-if="item.type === 'checkbox'">
          <el-checkbox-group v-model="form[item.value]" v-bind="item.other">
            <template v-for="op in item.options">
              <el-checkbox
                v-if="op && item.selectValue && item.selectLabel"
                :key="op[item.selectValue]"
                :label="op[item.selectLabel]"
                :value="op[item.selectValue]"
                >{{ op[item.selectValue] }}</el-checkbox
              >
            </template>
          </el-checkbox-group>
        </template>
        <template v-if="item.type === 'switch'">
          <el-switch v-model="form[item.value]" v-bind="item.other" />
        </template>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType, computed } from "vue";
  import useState from "./hooks/useState";
  import type { IWebFormField } from "./type";
  export default defineComponent({
    name: "WebForm",
    props: {
      labelWidth: {
        type: String,
        default: "90px",
      },
      formField: {
        type: Array as PropType<IWebFormField[]>,
        default: () => [],
      },
      modelValue: {
        type: Object,
        default: () => ({}),
      },
    },
    setup: (props, context) => {
      const { webFormRef } = useState();
      const form = computed(() => props.modelValue);
      return {
        webFormRef,
        form,
      };
    },
  });
</script>
