// merge two objects 
export const extend = (target, src) => {
    for (let i in src) {
        target[i] = src[i]
    }
    return target
}

export const applyRef = (ref, value) => {
	if (ref !== null) {
		if (typeof ref === 'function') { 
            ref(value)
        } else {
            ref.current = value
        }
	}
}