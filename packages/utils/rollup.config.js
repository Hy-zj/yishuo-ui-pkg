export default {
  input: "src/index.js",
  output: ["esm", "cjs"].map((format) => ({
    name: "yishuo-ui",
    format,
    dir: "dist",
    entryFileNames: `yishuo-ui-utils.[format].js`,
    preserveModulesRoot: "src",
  })),
  plugins: [],
};
