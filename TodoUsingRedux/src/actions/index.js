import { ADD_TODO , EDIT_TODO , REMOVE_TODO } from "../constants";

export const add = (todo) =>({
type : ADD_TODO , 
payload : todo
})

export const edit = (todoTd) =>({
    type : EDIT_TODO,
    payload : todoTd
})

export const remove = (todo) =>({
    type : REMOVE_TODO,
    payload : todo
})