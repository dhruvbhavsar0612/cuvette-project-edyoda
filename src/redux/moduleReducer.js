import {
    FETCH_MODULES_FAILURE,
    FETCH_MODULES_REQUEST,
    FETCH_MODULES_SUCCESS,
} from '../actions/moduleActions';

const initialState ={
    modules:[],
    instructors:[],
    loading: false,
    hasErrors: false
};

const modulesReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_MODULES_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_MODULES_SUCCESS:
            return {
                ...state,
                loading: false,
                modules: action.payload,
                hasErrors: false
            };
        case FETCH_MODULES_FAILURE:
            return {
                ...state,
                loading: false,
                modules:[],
                hasErrors: true
            }
        default:
            return state;

    }
};

export default modulesReducer;