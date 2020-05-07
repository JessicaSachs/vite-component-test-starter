export const DataTestIdPlugin = (wrapper) => {
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
