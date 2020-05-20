import {mount} from '@vue/test-utils'
import HelloWorld from '../src/HelloWorld.vue'

describe('HelloWorld.spec.js', () => {
  it('renders', async () => {
    const wrapper = mount(HelloWorld, { attachTo: '#root' })
    expect(wrapper.html()).to.contain('Hello')
  })
})


