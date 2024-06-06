import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { remove, edit } from "../../actions";

function Todo({ id, name }) {
  const [editText, setEditText] = useState(name);
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();

  const editTodo = () => {
    if(isEdit){
      dispatch(edit({id:id , name : editText}))
      setIsEdit(false);
    }else{
      setIsEdit(true)
    }
  };

  return (
    <>
      <div className="  flex justify-between gap-5  ">
        <div id={id}>
          {isEdit ? (
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
          ) : (
            editText
          )}
        </div>

        <button
          className=""
          onClick={() => {
            dispatch(remove({ id }));
          }}
        >
          {" "}
          Remove{" "}
        </button>

        <button onClick={editTodo}>
          {isEdit ? "save" : "Edit"}{" "}
        </button>
      </div>
    </>
  );
}

export default Todo;
