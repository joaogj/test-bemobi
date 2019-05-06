import tidal from '../api/tidal';

export const recarga = () => {
    return async (dispatch) => {
        const response = await tidal.get('/recarga')
        let amount = {};
        let bonus = {};
            for(let i = 0; i < response.data.length; i++)
            {
                amount = { ...amount, [i]: response.data[i].amount};
                bonus = { ...bonus, [i]: response.data[i].bonus_amount};
            }
        dispatch({ 
            type: 'RECARGA', 
            payload: amount,
        });
    };
};

export const dados = () => {
    return async (dispatch) => {
        const response = await tidal.get('/dados')
        let gb_amount = {};
            for(let i = 0; i < response.data.length; i++)
            {
                gb_amount = { ...gb_amount, [i]: response.data[i].gb_amount};
            }
        dispatch({ 
            type: 'DADOS', 
            payload: gb_amount
        });
    };
};
