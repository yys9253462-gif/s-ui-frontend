const js = require('@eslint/js')
const vue = require('eslint-plugin-vue')
const { withVueTs, vueTsConfigs } = require('@vue/eslint-config-typescript')

module.exports = withVueTs(
  { scriptLangs: ['ts', 'js'] },
  {
    ignores: ['dist/**', 'node_modules/**', '.eslintrc.js', 'eslint.config.cjs'],
  },
  js.configs.recommended,
  ...vue.configs['flat/essential'],
  ...vueTsConfigs.recommended,
  {
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
)
