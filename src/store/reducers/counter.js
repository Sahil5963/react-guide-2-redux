import * as actionTypes from '../actions/actions'

const initialState = {
    counter: 0,
    results:[]
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.INCREMENT:
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState
            break;
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1,
            }
            break;
        case actionTypes.ADD:
            return {
            ...state,
            counter: state.counter + action.value
        }
            break;
        case actionTypes.SUBTRACT:
            return {
            ...state,
            counter: state.counter + action.value
        }
            break;
        case actionTypes.STORE_RESULT:
            return {
            ...state,
            results:state.results.concat({id:new Date(),value:state.counter}),
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