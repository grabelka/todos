import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

const TodoList = ({ todos }) => (
  <div className="todo-list">
    {todos && todos.length
      ? todos.map((todo, index) => {
          return <Todo key={`todo-${todo.id}`} todo={todo} />;
        })
      : "No todos, yay!"}
  </div>
);

const mapStateToProps = state => {
	const todos = state.todos;
	return { todos };
};

export default connect(mapStateToProps)(TodoList);