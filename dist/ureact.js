function Vnode(type, key, ref, props) {
  this.type = type;
  this.key = key;
  this.ref = ref;
  this.props = props;
  this.$$typeof = 1;
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

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var Component =
/*#__PURE__*/
function () {
  function Component(props, context) {
    _classCallCheck(this, Component);

    this.props = props;
    this.context = context;
  }

  _createClass(Component, [{
    key: "setState",
    value: function setState(state, callback) {
      this._pendingState.push(state);
    }
  }]);

  return Component;
}();

var ureact = {
  createElement: createElement,
  h: createElement,
  Component: Component
};

export default ureact;
export { createElement, createElement as h, Component };
