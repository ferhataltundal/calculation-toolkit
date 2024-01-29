import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
export default {
  input: "src/index.ts",
  output: [
    {
      file: "build/bundle.js",
      format: "umd",
      name: "calc",
      sourcemap: true,
    },
    {
      file: "build/bundle.min.js",
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
