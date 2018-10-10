import { createElement } from '../../src/ureact'

 describe('ureact.js', () => {
    it('type', () => {
        var el= createElement('div', null, 'hello')
        expect(el.type).toBe('div')
        expect(typeof el.props.children).toBe('string')
        expect(el.props.children.length).toBe(5)
    })
})