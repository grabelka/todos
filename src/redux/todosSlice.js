import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    todoAdded(state, action) {
      state.push({
        id: 'todo-' + Date.now(),
        text: action.payload,
        completed: false
      })
    },
    todoToggled(state, action) {
      const todo = state.find(todo => todo.id === action.payload)
      todo.completed = !todo.completed
    },
    todoDeleted(state, action) {
      const todo = state.find(todo => todo.id === action.payload)
      const index = state.indexOf(todo);
      if (index > -1) {
        state.splice(index, 1); 
      }
    }
  }
})

export const { todoAdded, todoToggled, todoDeleted } = todosSlice.actions
export default todosSlice.reducer