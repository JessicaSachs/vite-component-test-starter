import {getSpecsToRun} from './loader.js'
import {config} from '@vue/test-utils'
import {DataTestIdPlugin} from './helpers/plugins';

/** Setup, before tests run */
config.plugins.VueWrapper.install(DataTestIdPlugin)

/**
 * Default is ./App.spec.js
 * Relative path is added below
 *
 * Loading specs based on the querystring in the browser.
 * Loading "all" specs unsupported out of the box
 * ?spec=App.spec.js
 * ?specs=Foo.spec.js,App.spec.js
 * ?run=App.spec.js
 */
export const specs = getSpecsToRun().map(specName => import(`./${specName}`))
