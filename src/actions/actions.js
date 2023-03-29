export const ADD_MODULE = "ADD_MODULE";
export const ADD_INSTRUCTOR = "ADD_INSTRUCTOR";
export const DELETE_MODULE = "DELETE_MODULE";
export const DELETE_INSTRUCTOR = "DELETE_INSTRUCTOR";
export const SET_INSTRUCTORS = "SET_INSTRUCTORS";
export const SET_MODULES = "SET_MODULES";

export const addModule = (module) => ({
    type: ADD_MODULE,
    payload: module
});

export const setInstructor = (instructor) => ({
    type: SET_INSTRUCTORS,
    payload: instructor
});