export class Component {
    constructor (props, context) {
        this.props = props
        this.context = context
    }

    setState (state, callback) {
        this._pendingState.push(state)
    }
}