// merge two objects 
export const extend = (target, src) => {
    for (let i in src) {
        target[i] = src[i]
    }
}