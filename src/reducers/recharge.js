export default (state = {}, action) => {
    switch (action.type) {
        case 'RECHARGE': 
        return { 
            ...state, amount: action.payload 
        }
        default:
            return state
    }
}