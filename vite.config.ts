import { UserConfigExport, ConfigEnv } from "vite";
import vue from "@vitejs/plugin-vue";

export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  return {
    plugins: [vue()],
  };
};
