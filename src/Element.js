import { extend } from './util'

// create new element to object
// e.g. { type: xx, props: xx, children: xx }
// export function createElement (type, props, ...args) {
//     let children = args.length ? args : null
//     return { type, props, children }
// }

export function createElement (type, props, args) {
    let children = arguments.length > 2 ? [].slice.call(arguments, 2) : null
    return { type, props, children }
}