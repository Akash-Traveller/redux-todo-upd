/* eslint-disable array-callback-return */
import { ADD_TODO, CHECKBOX_TODO, DELETE_ALL, REMOVE_TODO, UPDATE_TODO_VALUE } from "../actions/actions";

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
        case REMOVE_TODO:
            const filteredTodo = state.filter((todo) => todo.id !== action.payload);
            return filteredTodo;  
        case UPDATE_TODO_VALUE:
            let data = action.payload;      
            const updatedArray = [];   
            state.map((item) => {
                if(item.id===data.id){
                    item.id=data.id;
                    item.todo=data.todo;
                    item.completed=data.completed;
                }
                updatedArray.push(item);    
            })
            return updatedArray;
            case CHECKBOX_TODO:
                let todoArray = [];
                state.map((item) => {
                    if(item.id===action.payload){
                        item.completed = !item.completed;
                    }
                    todoArray.push(item);
                })
            return todoArray;    
        default: return state;
    }
}