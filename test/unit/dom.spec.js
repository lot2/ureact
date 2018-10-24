import { h } from '../../src/ureact'
import {
    createNode,
    removeNode,
    setAccessor
} from '../../src/dom/index'

describe('dom.js', () => {
    // 测试createNode
    it('createNode', () => {
        const node= createNode('div', false)
        expect(node.normalizedNodeName).toBe('div')
        expect(node.nodeName.toLowerCase()).toBe('div')
    })

    // 测试removeNode
    it('removeNode', () => {
        let divNode = createNode('div', false)
        let spanNode = createNode('span', false)
        divNode.appendChild(spanNode)
        expect(divNode.children.length).toBe(1)
        removeNode(spanNode)
        expect(divNode.children.length).toBe(0)
    })

    // 测试setAccessor
    it('setAccessor', () => {
        // setAccessor(node, name, old, value, isSvg)
        // 1. class/className
        let node1 = h('div', { className: 'div-class' }, 'test')
        setAccessor(node1, 'className', null, 'div-class')
        expect(node1.className).toBe('div-class')
        // 2. refs: object
        let ref_div = {}
        let node2 = h('div', { ref: ref_div })
        setAccessor(node2, 'ref', null, ref_div)
        expect(ref_div.current).toBe(node2)
        // 2. refs: function
        let ref_func = (nodes) => { return 'ref-func' }  
        let node3 = h('div', { ref: ref_func })
        setAccessor(node3, 'ref', null, ref_func)
        expect(ref_func(node3)).toBe('ref-func')
        // 3. style: string
        const node4= createNode('div', false)
        setAccessor(node4, 'style', null, 'color: red; font-size: 14px;')
        expect(node4.style.color).toBe('red')
        expect(node4.style.fontSize).toBe('14px')
        // 3. style: object
        const node5= createNode('div', false)
        setAccessor(node5, 'style', {color: 'yellow', width: 100}, {color: 'green', fontSize: 15})
        expect(node5.style.color).toBe('green')
        expect(node5.style.fontSize).toBe('15px')
        expect(node5.style.width).toBe('')

    })
})