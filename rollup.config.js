import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
export default {
  input: "src/index.ts",
  output: [
    {
      file: "build/calculation-toolkit.js",
      format: "umd",
      name: "calc",
      sourcemap: true,
    },
    {
      file: "build/calculation-toolkit.min.js",
      format: "umd",
      name: "calc",
      sourcemap: true,
      plugins: [terser()],
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.build.json" }),
  ],
};
