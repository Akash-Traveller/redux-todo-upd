import { ADD_TODO, DELETE_ALL } from "../actions/actions";

const intialState = [
    {id: 1, todo: 'Buy Laptop', completed: false},
    {id: 2, todo: 'Master Redux', completed: false},
    {id: 3, todo: 'Watering Plants', completed: true},
];

export const operationsReducer = (state = intialState,action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state,action.payload];
        case DELETE_ALL:
            return [];    
        default: return state;
    }
}