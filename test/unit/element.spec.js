import { createElement, Component } from '../../src/ureact'

 describe('ureact.js', () => {
    it('createElement', () => {
        var el= createElement('div', null, 'hello')
        expect(el.type).toBe('div')
        expect(typeof el.props.children).toBe('string')
        expect(el.props.children.length).toBe(5)
    })
    it('component', () => {
        class ComTest extends Component {
            render () {
                return h('div', null, 'com test')
            }
        }
        expect(ComTest.prototype.render).toHaveBeenCalled
    })
})