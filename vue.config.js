const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
module.exports = {
  // 1.配置方式1：CLI 提供的属性
  outputDir: './build',
  publicPath: './',
  configureWebpack: {
    plugins: [
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  }
}
