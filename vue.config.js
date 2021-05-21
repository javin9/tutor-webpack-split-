/*
 * @Desc:
 * @FilePath: /tutor-webpack-split/vue.config.js
 * @Author: liujianwei1
 * @Date: 2021-05-20 13:41:08
 * @LastEditors: liujianwei1
 * @Reference Desc:
 */
module.exports = {
  configureWebpack: {
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name (module) {
              // get the name. E.g. node_modules/packageName/not/this/part.js
              // or node_modules/packageName
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
              // https://docs.npmjs.com/cli/v7/configuring-npm/package-json
              // npm包名满足URL-safe
              return `npm.${packageName.replace('@', '')}`
            }
          }
        }
      }
    }
  }
}
