# Vite Component Test Starter

⚠️ *EXPERIMENTAL* Starter for [Vue Test Utils](https://github.com/vuejs/vue-test-utils-next) with [Vite](https://github.com/vuejs/vite)

> @vue/test-utils integration with Vue Components served by Vite

## Features
1. Component Driven Development Workflow
2. Running individual specs one-at-a-time with `/tests?spec=HelloWorld.spec.js,App.spec.js`
3. Full customization of runner and plugins provided by [aria-vue](https://github.com/aelbore/aria-vue)

## TODO
- [x] Headless mode
- [x] In-browser Reporter
- [x] queueing multiple specs
- [ ] Re-run specs on source or spec file update

## Installation

1. Clone this repository
2. `npm install`
3. `npm run headless` to run your test in headless
4. `npm run tdd` to run in tdd mode 
5. `npm run tdd:vite` to run in tdd mode using vite 

## Benefits

1. Zero configuration. Vite is zero config. Your tests can be, too.
1. Convenience. By sharing transform middleware with Vite, you do not need to maintain two sources of truth for your code transforms (e.g. `jest.config.js` _and_ a `webpack.config.js`)
1. Speed. Bundling all of your specs is slower than transforming **by resource request** with Vite. 
