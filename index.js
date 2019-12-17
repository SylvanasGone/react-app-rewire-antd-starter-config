const { paths } = require('react-app-rewired')
const {
  fixBabelImports,
  addWebpackAlias,
  override,
  addPostcssPlugins,
  useEslintRc
} = require('customize-cra')
const rewireHotLoader = require('react-app-rewire-hot-loader-for-customize-cra')
const rewireCssModules = require('react-app-rewire-css-modules-extensionless')

module.exports = override(
  rewireCssModules(),
  addPostcssPlugins([
    require('postcss-preset-env')({
      stage: 0
    }),
    require('postcss-flexbugs-fixes')
  ]),
  rewireHotLoader(),
  fixBabelImports(
    'import',
    {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: 'css'
    },
    {
      style: false,
      libraryName: 'lodash',
      libraryDirectory: null,
      camel2DashComponentName: false
    }
  ),
  useEslintRc('.eslintrc.json'),
  addWebpackAlias({ '@': paths.appSrc })
)
