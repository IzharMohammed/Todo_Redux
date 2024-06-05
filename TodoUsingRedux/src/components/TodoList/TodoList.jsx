import React from "react";
import TodoInput from "../TodoInput/TodoInput";
import { useSelector } from "react-redux";
import Todo from "../Todo/Todo";

function TodoList() {
    const todoList = useSelector(state=>{
      return state.todo
});
    console.log(todoList);


  return (
    <div>
<TodoInput />
{
  todoList.map(todo => <Todo id={todo.id} name = {todo.name} />)
}
    </div>
  );
}

export default TodoList;
