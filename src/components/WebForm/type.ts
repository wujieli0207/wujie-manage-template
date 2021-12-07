import { IBasicOption } from "/@/types/formTypes";

// Web 端表单字段参数配置
export interface IWebFormField {
  value: string | number; //  字段 value
  label: string; // 字段 标签
  // 字段录入项类型
  type: "input" | "textarea" | "select" | "radio" | "checkbox" | "switch";
  placeholder?: string;
  options?: IBasicOption; // value-label
  selectValue?: string | number;
  selectLabel?: string;
  other?: any; // 其他参数配置
}
