import { createElement, Component } from '../../src/ureact'

describe('ureact.js', () => {
    // 测试createElement
    it('createElement', () => {
        var el= createElement('div', null, 'hello')
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
        expect(ComTest.prototype.render).toHaveBeenCalled
    })
})