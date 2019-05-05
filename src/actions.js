export const recarga = () => {
    return async (dispatch) => {
        const response = await axios.get('https://tidal-hearing.glitch.me/recarga');
        let amount = {};
        for(let i = 0; i < response.data.length; i++)
        {
            amount = { ...amount, [i]: response.data[i].amount};
        }

        dispatch({ type: 'RECARGA', payload: amount });
    };
};

export default (state = {}, action) => {
    switch (action.type) {
        case 'RECARGA': return { ...state, amount: action.payload }
    }
}