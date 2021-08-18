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
      <RiCloseCircleLine className="deleteIcon" onClick={() => deleteToDo(id)}>
        Supprimer
      </RiCloseCircleLine>
    </div>
  );
}

export default TodoLine;
