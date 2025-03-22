/**
 * Lint-staged 配置文件，用于在 Git 提交前自动格式化和修复代码。
 * 这个配置文件通常命名为 .lintstagedrc 或在 package.json 中作为 lint-staged 属性。
 */

/**
 * 定义对不同文件类型执行的 linting 规则。
 * 每个规则都指定了一组 glob 模式，用于匹配文件，以及一个命令列表，
 * 这些命令将在匹配的文件被暂存（staged）时执行。
 */
export default {
  /**
   * 对 JavaScript、TypeScript、JSX 和 TSX 文件执行 ESLint 修复。
   * 这些文件在被暂存时会自动修复 ESLint 可自动修复的问题。
   */
  '*.{js,ts,jsx,tsx}': ['pnpm lint:fix'],

  /**
   * 对 JSON 文件执行 ESLint 修复。
   * 这些文件在被暂存时会自动修复 ESLint 可自动修复的问题。
   */
  '*.json': ['pnpm lint:fix'],

  /**
   * 对 Vue 文件执行 ESLint 修复。
   * 这些文件在被暂存时会自动修复 ESLint 可自动修复的问题。
   */
  '*.vue': ['pnpm lint:fix'],
}
