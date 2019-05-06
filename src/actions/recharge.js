import axios from 'axios'

export const recarga = () => {
    return async (dispatch) => {
        let amount = {};
        axios.get('https://tidal-hearing.glitch.me/recarga')
            .then(response => {
                for(let i = 0; i < response.data.length; i++)
                {
                    amount = { ...amount, [i]: response.data[i].amount};
                }
            });

        dispatch({ 
            type: 'RECARGA', 
            payload: amount 
        });
    };
};
