export default (state = {}, action) => {
    switch (action.type) {
        case 'RECARGA': 
        return { 
            ...state, amount: action.payload, 
        }
        case 'DADOS':
        return { ...state, gb_amount: action.payload }
        default:
            return state
    }
}