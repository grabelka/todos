import React from "react";
import { connect } from "react-redux";
import { todoToggled } from "../redux/todosSlice";
import { todoDeleted } from "../redux/todosSlice";

const Todo = ({ todo, todoToggled, todoDeleted }) => (
  <div className="todo-item">
    <div>
      {todo && todo.completed ? "👌" : "👋"}{" "}
      <span className={ (todo && todo.completed) ? "todo-done" : "" } onClick={() => todoToggled(todo.id)}>
        {todo.text}
      </span>
    </div>
    <button className='App-button' onClick={() => todoDeleted(todo.id)}>Delete</button>
  </div>
);

export default connect(
  null,
  { todoToggled, todoDeleted }
)(Todo);
