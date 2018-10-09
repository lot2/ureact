// merge two objects

// e.g. { type: xx, props: xx, children: xx }
// export function createElement (type, props, ...args) {
//     let children = args.length ? args : null
//     return { type, props, children }
// }

function createElement(type, props, args) {
  var children = arguments.length > 2 ? [].slice.call(arguments, 2) : null;
  return {
    type: type,
    props: props,
    children: children
  };
}

var ureact = {
  createElement: createElement
};

export default ureact;
export { createElement };
