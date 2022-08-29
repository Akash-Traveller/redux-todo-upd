export const ADD_TODO = "ADD_TODO";
export const DELETE_ALL = "DELETE_ALL";
export const REMOVE_TODO = "REMOVE_TODO";
export const UPDATE_TODO_VALUE = "UPDATE_TODO_VALUE";
export const CHECKBOX_TODO = "CHECKBOX_TODO";

export const addTodo = (payload) => {
     return {
            type: ADD_TODO,
            payload
        }
}

export const deleteAll = (payload) => {
    return {
        type: DELETE_ALL,
    }
}

export const removeTodo = (payload) => {
    return {
        type: REMOVE_TODO,
        payload
    }
}

export const handleEditSubmit = (payload) => {
    return {
        type: UPDATE_TODO_VALUE,
        payload
    }
}

export const handleCheckBox = (payload) => {
    return {
        type: CHECKBOX_TODO,
        payload
    }
}
