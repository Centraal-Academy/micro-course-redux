const merge = require('webpack-merge')
const common = require('./webpack.common')

const config = (env, args) => {
  const commonConfig = common(env, args)
  return merge(commonConfig, {})
}

module.exports = config
