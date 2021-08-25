import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";

function TodoLine({ id, value, changeToDo, deleteToDo }) {
  return (
    <div className="todo-row">
      <input
        type="text"
        className="todo-entry"
        onChange={(e) => changeToDo(id, e.target.value)}
        value={value}
      ></input>
      <RiCloseCircleLine
        size={25}
        style={{ cursor: "pointer", display: "flex" }}
        className="deleteIcon"
        onClick={() => deleteToDo(id)}
      />
    </div>
  );
}

export default TodoLine;
