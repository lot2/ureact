import { applyRef } from '../util'
import { IS_NON_DIMENSIONAL } from '../constant'

// create node
export const createNode = (nodeName, isSvg) => {
    let node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName)
    node.normalizedNodeName = nodeName
    return node
}

// remove node
export const removeNode = (node) => {
    let parent = node.parentNode
    if (parent) {
        parent.removeChild(node)
    }
}

// set attrs to real attrs
export const setAccessor = (node, name, old, value, isSvg) => {
    if (name === 'className') {
        name = 'class'
    }
    if (name === 'key') {

    } else if (name === 'ref') {
        applyRef(old, null)
        applyRef(value, node)
    } else if (name === 'class' && !isSvg) {
        node.className = value || ''
    } else if (name === 'style') {
        if (!value || typeof value === 'string' || typeof old === 'string') {
            node.style.cssText = value || ''
        }
        if (value && typeof value === 'object') {
            if (typeof old !== 'string') {
                for (let i in old) {
                    if (!(i in value)) {
                        node.style[i] = ''
                    }
                }
            }
            for (let i in value) {
                node.style[i] = typeof value[i] === 'number' && IS_NON_DIMENSIONAL.test(i) === false ? (value[i] + 'px') : value[i]
            }
        }
    } else if (name === 'dangerouslySetInnerHTML') {
        if (value) {
            node.innerHtml = value.__html || ''
        }
    } else if (name.slice(0, 2) === 'on') {
        let useCapture = name !== (name = name.replace(/Capture$/, ''))
        name = name.toLowerCase().slice(2)
        if (value) {
            if (!old) {
                node.addEventListener(name, eventProxy, useCapture)
            }
        } else {
            node.removeEventListener(name, eventProxy, useCapture)
        }
        (node._listeners || (node._listeners = {}))[name] = value
    } else if (name !== 'list' && name !== 'type' && !isSvg && name in node) {
        try {
            node[name] = value === null ? '' : value
        } catch (error) {
            if ((value === null || value === false) && name !== 'spellcheck') {
                node.removeAttribute(name)
            }
        }
    } else {
        let ns = isSvg && (name !== (name = name.replace(/^xlink:?/, '')))
        if (value === null || value === false) {
			if (ns) {
                node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase())
            } else {
                node.removeAttribute(name)
            }
		} else if (typeof value !== 'function') {
			if (ns) {
                node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value)
            } else {
                node.setAttribute(name, value) 
            }
		}
    }
}


function eventProxy(e) {
	return this._listeners[e.type](options.event && options.event(e) || e);
}