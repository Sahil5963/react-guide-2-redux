import * as actionTypes from '../actions'

const initialState = {
    results:[]
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        
        case actionTypes.STORE_RESULT:
            return {
            ...state,
            results:state.results.concat({id:new Date(),value:action.result}),
        }
            break;
        case actionTypes.DELETE_RESULT:
            const updatedArray = state.results.filter(result => result.id !== action.resultElId);
            return {
            ...state,
            results:updatedArray,
        }
            break;
    }

    return state;  
};

export default reducer;