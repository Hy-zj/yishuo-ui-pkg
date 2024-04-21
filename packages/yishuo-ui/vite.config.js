import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    target: 'modules',
    //打包文件目录
    outDir: 'dist',
    //压缩
    minify: false,
    //css分离
    cssCodeSplit: false,
    // rbga色值禁止转成十六进制
    cssTarget: 'chrome61',
    lib: {
      entry: './src/main.js',
      formats: ['es', 'cjs'],
      name: 'yishuo-ui-core',
    },
    rollupOptions: {
      // 排除打包的库
      external: ['vue'],
      input: ['./src/main.js'],
      output: ['esm', 'cjs'].map((format) => ({
        name: 'yishuo-ui',
        format,
        dir: 'dist',
        entryFileNames: `yishuo-ui.[format].js`,
        assetFileNames: 'index.css',
        preserveModulesRoot: 'src',
      }))
    },
  },
})
