import svelte from "rollup-plugin-svelte";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import typescript from "rollup-plugin-typescript2";
import sourcemaps from 'rollup-plugin-sourcemaps';
import { terser } from "rollup-plugin-terser";

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/main.js",
  output: {
    sourcemap: false,
    format: "iife",
    name: "app",
    file: "public/xpedia/bundle.js",
    globals: {
      jszip: "JSZip"
    }
  },
  plugins: [

    svelte({
      dev: !production,
      css: css => {
        css.write("public/xpedia/bundle.css");
      }
    }),

    resolve({ browser: true, preferBuiltins: false }),
    typescript({
      tsconfig: "tsconfig.json"
    }),

    commonjs(),

    sourcemaps(),

    production && terser(),

    !production && livereload(),

  ],
  watch: {
    clearScreen: false
  }
};
