import { config } from '@vue/test-utils'

const DataTestIdPlugin = (wrapper) => {
  function findByTestId(selector) {
    const dataSelector = `[data-testid='${selector}']`
    const element = wrapper.element.querySelector(dataSelector)
    if (element) {
      return element
    }

    return null
  }

  return {
    findByTestId
  }
}

config.plugins.VueWrapper.install(DataTestIdPlugin)
