import { combineReducers  } from "redux";

import moduleReducer from "./moduleReducer";
// import instructorReducer from "./instructorReducer";


const rootReducer = combineReducers({
    modules: moduleReducer,
    // instructors: instructorReducer
});

export default rootReducer;