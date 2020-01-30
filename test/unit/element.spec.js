/* eslint-disable no-undef */
import { createElement, Component } from '../../src/ureact'

describe('ureact.js', () => {
  // 测试createElement
  it('createElement', () => {
    var el = createElement('div', null, 'hello')
    expect(el.type).toBe('div')
    expect(typeof el.props.children).toBe('string')
    expect(el.props.children.length).toBe(5)
  })
  // 测试Component
  it('component', () => {
    class ComTest extends Component {
      render () {
        return h('div', null, 'com test')
      }
    }
    // eslint-disable-next-line no-unused-expressions
    expect(ComTest.prototype.render).toHaveBeenCalled
  })
})
