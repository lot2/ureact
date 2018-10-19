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
            // 通过 "current" 取得 DOM 节点
            ref.current = value
        }
	}
}