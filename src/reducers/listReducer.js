/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */

export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.payload]
        case 'DELETE_ITEM':
            return state.filter(item => item.id !== action.payload)
        case 'CHANGE_DONE':
            return state.map(item => {
                if (item.id === action.payload) {
                    item.done = !item.done
                }
                return item
            })
        case 'MOVE_ITEM':

            const { idStart, idEnd, indexStart, indexEnd, id } = action.payload
            const newState = [...state]
            const item = newState.splice(indexStart, 1);
            newState.splice(indexEnd, 0, ...item)

            return newState;

        default:
            return state;
    }
}
