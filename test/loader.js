/** Spec Loader */

export const DEFAULT_SPEC = 'App.spec.js'

export function getSpecsToRun(defaultSpec = DEFAULT_SPEC) {
  const params = new URLSearchParams((document.location.href.split('?'))[1])

  // ?spec=App.spec.js
  // ?specs=Foo.spec.js,App.spec.js
  // ?run=App.spec.js
  const specParams =
  params.getAll('spec') ||
  params.getAll('run') ||
  params.getAll('specs')

  // handle commas
  const allSpecs = specParams.reduce((acc, curr) => {
    return acc.concat(curr.split(','))
  }, [])

  if (!allSpecs.length) allSpecs.push(defaultSpec)
  return allSpecs
}
