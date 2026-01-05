import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/lib/index.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "dist/lib/index.esm.js",
      format: "es",
      sourcemap: true,
    },
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      clean: true,
    }),
  ],
  external: [], // 外部依赖（不打包进产物）
};
