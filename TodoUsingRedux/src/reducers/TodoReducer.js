import { ADD_TODO,EDIT_TODO,REMOVE_TODO } from "../constants"

 /*REDUCERS */


export const initialTodos = [
    {
        id : 1,
        name : 'izhar'
    },
    {
        id : 2,
        name :'mohammed'
    }
]


export default function todoReducer(todos=initialTodos,action){

if(action.type == ADD_TODO){
return [...todos , {id : action.payload.id , name : action.payload.name}]
}

/* if(action.type == EDIT_TODO){

}
 */
if(action.type == REMOVE_TODO){
return todos.filter(todo => todo.id!=action.payload.id);
}

return todos;
}