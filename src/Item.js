import React from "react";
import "./style.css";

function Item(props) {
  return (
    <div className="item">
      <input
        type="checkbox"
        name="task1"
        checked={props.object.completion}
        onChange={() => props.handleChange(props.object.id) }
      />
      <label name="task1"> {props.object.tag} </label>
    </div>
  );
}
export default Item;
