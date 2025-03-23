import antfu from '@antfu/eslint-config'

export default antfu(
  /**
   * 第一层配置选项，用于启用 UnoCSS、Vue 和 TypeScript 的格式化处理。
   */
  {
    tailwindcss: true,
    // 对 vue 文件进行格式化处理
    vue: true,
    // 对 ts 文件进行格式化处理
    typescript: true,
    formatters: {
      // 对 css 文件进行格式化处理
      css: true,
      // 对 html 文件进行格式化处理
      html: true,
    },
  },

  /**
   * 第二层配置选项，用于指定文件匹配模式和 Vue 特定的规则。
   */
  {
    // 指定匹配所有 .vue 文件
    files: ['**/*.vue'],
    rules: {
      'vue/html-self-closing': ['error', {
        html: {
          // 要求 HTML 空元素始终自闭合
          void: 'always',
        },
      }],
    },
  },
  /**
   * 第三层配置选项，用于定义 ESLint 忽略检查的文件和目录。
   */
  {
    ignores: [
      // 忽略 assets 目录下的 font 文件夹
      'assets/font',
      // 忽略 node_modules 目录
      'node_modules',
      // 忽略 .output 目录
      '.output',
      // 忽略 .nuxt 目录
      '.nuxt',
      // 忽略 dist 目录
      'dist',
    ],
  },
)
