import React from "react";
import { useState } from "react";
import { add } from "../../actions";
import { useDispatch, useSelector } from "react-redux";

function TodoInput() {
  const [todoText, setTodoText] = useState("");

  const dispatch = useDispatch();
  
  const todoList = useSelector(state=>{
    return state.todo
});

  const insertTodo = () => {
    const id = (todoList.length ==0 ) ? 1 : todoList.length+1;
    dispatch(add({ id: id, name: todoText }));
    setTodoText("");
  };

  return (
    <div>
      <input  
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button onClick={insertTodo}>Add</button>
    </div>
  );
}

export default TodoInput;
