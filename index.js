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
  // enable CSS modules without extension
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
    // import on demand
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
  // enable customize eslint config file
  useEslintRc('.eslintrc.json'),
  // webpack alias
  addWebpackAlias({ '@': paths.appSrc })
)
