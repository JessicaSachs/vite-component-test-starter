const { testPlugin } = require('aria-vue')

const configureServer = testPlugin({   
  script: './test/plugins.js'
})

module.exports = {
  configureServer
}