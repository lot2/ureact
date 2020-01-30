/* eslint-disable no-undef */
import { h } from '../../src/ureact'
import {
  createNode,
  removeNode,
  setAccessor
} from '../../src/dom/index'

describe('dom.js', () => {
  // 测试createNode
  it('createNode', () => {
    const node = createNode('div', false)
    expect(node.normalizedNodeName).toBe('div')
    expect(node.nodeName.toLowerCase()).toBe('div')
  })

  // 测试removeNode
  it('removeNode', () => {
    const divNode = createNode('div', false)
    const spanNode = createNode('span', false)
    divNode.appendChild(spanNode)
    expect(divNode.children.length).toBe(1)
    removeNode(spanNode)
    expect(divNode.children.length).toBe(0)
  })

  // 测试setAccessor
  it('setAccessor', () => {
    // setAccessor(node, name, old, value, isSvg)
    // 1. class/className
    const node1 = h('div', { className: 'div-class' }, 'test')
    setAccessor(node1, 'className', null, 'div-class')
    expect(node1.className).toBe('div-class')
    // 2. refs: object
    const refDiv = {}
    const node2 = h('div', { ref: refDiv })
    setAccessor(node2, 'ref', null, refDiv)
    expect(refDiv.current).toBe(node2)
    // 2. refs: function
    const refFunc = (nodes) => { return 'ref-func' }
    const node3 = h('div', { ref: refFunc })
    setAccessor(node3, 'ref', null, refFunc)
    expect(refFunc(node3)).toBe('ref-func')
    // 3. style: string
    const node4 = createNode('div', false)
    setAccessor(node4, 'style', null, 'color: red; font-size: 14px;')
    expect(node4.style.color).toBe('red')
    expect(node4.style.fontSize).toBe('14px')
    // 3. style: object
    const node5 = createNode('div', false)
    setAccessor(node5, 'style', { color: 'yellow', width: 100 }, { color: 'green', fontSize: 15 })
    expect(node5.style.color).toBe('green')
    expect(node5.style.fontSize).toBe('15px')
    expect(node5.style.width).toBe('')
  })
})
