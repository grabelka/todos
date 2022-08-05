import React, { useState } from 'react';
import { connect } from "react-redux";
import { todoAdded } from '../redux/todosSlice';

function AddTodo({dispatch}) {
	const [text, setText] = useState('');

  function addTodo() {
		if(text.trim()) {
			dispatch(todoAdded(text))
			setText('');
		}
  }

	return (
		<div>
			<input className='App-input' value={text} onChange={e => setText(e.target.value)} type='text' />
			<button className='App-button' onClick={addTodo}>Add todo</button>
		</div>
	);
};

export default connect()(AddTodo);;
