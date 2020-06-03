import { INCREMENT, DECREMENT} from "../actions";

const initial_state = { value:0}

export default (state= initial_state, action) => {
    switch (action.type) {
        case INCREMENT:
            return { value: state.value + 1 }
        case DECREMENT:
            return {value: state.value -1}
        default:
            return state

    }
}