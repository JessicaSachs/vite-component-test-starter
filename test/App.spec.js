import {mount} from '@vue/test-utils'
import App from '../src/App.vue'

describe('App.spec.js', () => {
  it('test button counter increments', async () => {
    const wrapper = mount(App, { attachTo: '#root' })
    const buttonCounterEl = wrapper.findByTestId('button-counter')
    expect(buttonCounterEl.textContent).to.equal('0')
    await wrapper.find('button').trigger('click')
    expect(buttonCounterEl.textContent).to.equal('1')
  })
})


