# react-app-rewire-antd-starter-config

An override-config for using react-app-rewired 2.0+ with Antd, react-hot-loader, PostCSS and more

基于 react-app-rewired 2.0+ 的 antd 项目初始化配置

⚠️ This config can NOT fit the version of create-react-app lower than 2.0

## Motivation

After rewiring a create-react-app project, we have to ovrride much config to meet our customized needs. Painfully, the same work is repeated every time when you initialize a rewired project. Thus, why not importing a ready-to-go config directly?

## Features

- support react-hot-loader
- support CSS Modules(enable CSS modules without any special extension)
- support all features of postcss-preset-env(stage: 0)
- add support for Antd and Lodash to import components on demand by default
- add support for using .eslintrc.json file to customize eslint by
  default
- add support for using '@' as root directory by default

## Preparation

1 ) Install create-react-app 2.x / 3.x

2 ) Install react-app-rewired 2.x

3 ) Install react-app-rewire-hot-loader

```sh
yarn add -D react-app-rewire-hot-loader

# If you don't already, you also need
yarn add react-hot-laoder
```

## Install

```sh
yarn add -D react-app-rewire-antd-starter-config
```

## Usage

In the config-overrides.js of the root of your project you created for react-app-rewired add this code:

```js
const rewireDefaultConfig = require('react-app-rewire-antd-starter-config')

module.exports = (config, env) => {
  // ...other rewires
  return rewireDefaultConfig(config, env)
}
```

E.g.

```jsx
// CSS modules without extension
import * as styles from './example.css'

// import on demand
import { Button, Table } from 'antd'
import { cloneDeep, pickBy } from 'lodash'
// use '@' as root directory
import Example from '@/Components/Example'

const TestComponent = () => (
  <div>
    <span className={styles.title}>Title</span>
    /* ... */
  </div>
)
```

Enjoy coding!

## LICENSE

MIT
