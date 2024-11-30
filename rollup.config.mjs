import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import packageJson from "./package.json" assert { type: "json" };
import tailwindcss from "tailwindcss";

import tailwindConfig from "./tailwind.config.mjs";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        declaration: true,
        declarationDir: "dist",
      }),
      postcss({
        extensions: [".css"],
        minimize: true,
        sourceMap: true,
        inject: {
          insertAt: "top",
        },
        config: {
          path: "./postcss.config.js",
        },
        plugins: [tailwindcss(tailwindConfig)],
      }),
    ],
  },
  {
    input: "dist/esm/src/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];
