import React from "react";
import { useDispatch } from "react-redux";
import { remove } from "../../actions";

function Todo({ id, name }) {
  const dispatch = useDispatch();

  return (
    <>
      <div id={id}>{name}</div>
      <button  onClick={() => {dispatch(remove({id}));  }}>  Remove </button>
      <button>Edit</button>
    </>
  );
}

export default Todo;
