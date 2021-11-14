import { UserConfigExport, ConfigEnv } from "vite";
import vue from "@vitejs/plugin-vue";

import { resolve } from "path";

const pathResolve = (dir: string): any => {
  return resolve(__dirname, ".", dir);
};

const alias: Record<string, string> = {
  "/@": pathResolve("src"),
};

export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  return {
    plugins: [vue()],
    resolve: {
      alias,
    },
  };
};
