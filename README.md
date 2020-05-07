# Vite Component Test Starter

Starter for [Vue Test Utils](https://github.com/vuejs/vue-test-utils-next) with [Vite](https://github.com/vuejs/vite)

> @vue/test-utils integration with Vue Components served by Vite

## Features
1. Component Driven Development Workflow
2. Running individual specs one-at-a-time

## TODO
1. Headless mode
1. In-browser Reporter
1. queueing multiple specs
1. Watching entire spec directory

## Installation

1. Clone this repository
2. `npm install`
3. `npm run dev`
4.  open `/test/index.html` in your browser

## Benefits

1. Zero configuration. Vite is zero config. Your tests can be, too.
1. Convenience. By sharing transform middleware with Vite, you do not need to maintain two sources of truth for your code transforms (e.g. `jest.config.js` _and_ a `webpack.config.js`)
1. Speed. Bundling all of your specs is slower than transforming **by resource request** with Vite. 
