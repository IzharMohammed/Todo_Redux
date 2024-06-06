1. create action creaters

2. Add reducers

3. create store

4. Get the state of reducers using useSelector hook , inside it we should pass the name which we have 
given in it while combineReducers 


For example : -
How to useSelector hook ??

Note : - if we want to use useSelector and useDispatch , then they are react-redux hooks we have to import 
react-redux    (npm i react-redux)

This this my todoReducer which i have combined it in combineReducers

const combineReducer = combineReducers({ todo: todoReducer }); 

and if i want to fetch data then i have to pass todo as a name :- 

    const todoList = useSelector(state=>{
      return state.todo
       });

How to useDispatch hook ??

This is my one action creator for adding todo , if i want to add data then useDispatch hook is useful : -

export const add = (todo) =>({
type : ADD_TODO , 
payload : todo
})

This is how i use the useDispatch hook :- 

  const dispatch = useDispatch();

  const insertTodo = () => {
    const id = (todoList.length ==0 ) ? 1 : todoList.length+1;
    dispatch(add({ id: id, name: todoText }));
    setTodoText("");
  };

  As soon as i call the dispatch(add({})) then the data is stored in payload . Now its time for reducers in reducers 
  i can pass state and actions , (in the below example state is named as todos) . inside action.payload i have access
  to id as well as name , now its easy for me to add data to an [array of {objects} ].

export default function todoReducer(todos=[],action){

if(action.type == ADD_TODO){
return [...todos , {id : action.payload.id , name : action.payload.name}]
} 

return todos; 
}
