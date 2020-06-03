const { testPlugin, watchPlugin } = require('aria-vue')

module.exports = {
  configureServer: [
    testPlugin({   
      script: './test/plugins.js'
    }),
    watchPlugin()
  ]
}
