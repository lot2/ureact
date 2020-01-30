import { Vnode } from './Vnode'

// create new element to object
export function createElement (type, attribute, children) {
  let key = null
  let ref = null
  const props = {}
  if (attribute) {
    key = attribute.key ? attribute.key + '' : null
    ref = attribute.ref || null
    for (const i in attribute) {
      if (i !== 'key' && i !== 'ref') {
        props[i] = attribute[i]
      }
    }
  }
  props.children = arguments.length > 3 ? [].slice.call(arguments, 2) : children
  return new Vnode(type, key, ref, props)
}
