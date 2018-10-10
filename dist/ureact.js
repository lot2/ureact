function Vnode(type, key, ref, props) {
  this.type = type;
  this.key = key;
  this.ref = ref;
  this.props = props;
  this.$typeof = 1;
}

function createElement(type, attribute, children) {
  var key = null;
  var ref = null;
  var props = {};

  if (attribute) {
    key = attribute.key ? attribute.key + '' : null;
    ref = attribute.ref || null;

    for (var i in attribute) {
      if (i !== 'key' && i !== 'ref') {
        props[i] = attribute[i];
      }
    }
  }

  props.children = arguments.length > 3 ? [].slice.call(arguments, 2) : children;
  return new Vnode(type, key, ref, props);
}

var ureact = {
  createElement: createElement
};

export default ureact;
export { createElement };
