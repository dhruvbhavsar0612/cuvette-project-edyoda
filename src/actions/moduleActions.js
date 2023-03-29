import axios from 'axios';

export const FETCH_MODULES_REQUEST = "FETCH_MODULES_REQUEST";;
export const FETCH_MODULES_SUCCESS = "FETCH_MODULES_SUCCESS";;
export const FETCH_MODULES_FAILURE = "FETCH_MODULES_FAILURE";;

export const fetchModulesRequest = () => ({
    type: FETCH_MODULES_REQUEST
});

export const fetchModuleSucess =  modules => ({
    type: FETCH_MODULES_SUCCESS,
    payload: modules,
});

export const fetchModuleFailure = error => ({
    type: FETCH_MODULES_FAILURE,
    payload: error,
});

// fetching modules from the server apis
export const fetchModules = () => {
    return dispatch =>{
        dispatch(fetchModulesRequest());
        axios
            .get('http://localhost:3000/api')
            .then(response =>{
                const modules = response.data;
                dispatch(fetchModuleSucess(modules));
            }) // fetching data from the server
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchModuleFailure(errorMsg));
            }); //catching any fetch error
    };
};
