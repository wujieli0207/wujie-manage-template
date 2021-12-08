<template>
  <web-form :form-field="formField" />
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import WebForm from "/@/components/WebForm/index.vue";
  import type { IWebFormField } from "/@/components/WebForm/type";
  export default defineComponent({
    name: "WebFormDemo",
    components: {
      WebForm,
    },
    setup: (props, context) => {
      const formField: IWebFormField[] = [
        {
          value: "name",
          label: "姓名",
          type: "input",
          require: true,
          other: {
            style: "width: 220px",
          },
        },
      ];

      return {
        formField,
      };
    },
  });
</script>
