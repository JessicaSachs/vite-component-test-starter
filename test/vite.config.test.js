const Router = require('koa-router')
const glob = require('glob')

const TEST_GLOB_PATTERN = `test/**/*.spec.js`

const getTestFiles = ({
  app, // Koa app instance
}) => {
  const router = new Router()

  // The test-files route
  router.get('/test-files', async (ctx, next) => {
    ctx.body = glob.sync(`./${TEST_GLOB_PATTERN}`)
    return next()
  })

  app.use(router.routes())
}

module.exports = {
  // plugins for test
  configureServer: [ getTestFiles ]
}
