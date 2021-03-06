import * as actionTypes from '../actions/actionTypes'
import {updateObject} from '../util';

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
        case actionTypes.DECREMENT:
            return updateObject(state,{counter: state.counter - 1})
        case actionTypes.ADD:
            return updateObject(state,{counter: state.counter + action.value})
        case actionTypes.SUBTRACT:
            return updateObject(state,{counter: state.counter - action.value})
        case actionTypes.STORE_RESULT:
            return updateObject(state,{results:state.results.concat({id:new Date(),value:state.counter})})
        case actionTypes.DELETE_RESULT:
            const updatedArray = state.results.filter(result => result.id !== action.resultElId);
            return updateObject(state,{results:updatedArray})
    }
    return state;  
};

export default reducer;