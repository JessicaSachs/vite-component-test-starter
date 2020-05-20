/** Spec Loader */

export async function getSpecsToRun() {
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

  if (!allSpecs.length) {
    return fetch('/test-files').then(r => r.json())
  }

  return Promise.resolve(allSpecs)
}
