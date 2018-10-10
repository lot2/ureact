function Vnode(type, key, ref, props) {
  this.type = type;
  this.key = key;
  this.ref = ref;
  this.props = props;
  this.$typeof = 1;
}

function createElement(type, attribute, children) {
  var key = attribute.key ? attribute.key + '' : null;
  var ref = attribute.ref || null;
  var props = {};

  for (var i in attribute) {
    if (i !== 'key' && i !== 'ref') {
      props[i] = attribute[i];
    }
  }

  props.children = arguments.length > 2 ? [].slice.call(arguments, 2) : children;
  return new Vnode(type, key, ref, props);
}

var ureact = {
  createElement: createElement
};

export default ureact;
export { createElement };
