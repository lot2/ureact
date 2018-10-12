// vnode元素节点
export function Vnode (type, key, ref, props) {
    this.type = type
    this.key = key
    this.ref = ref
    this.props = props
    this.$$typeof = 1
}