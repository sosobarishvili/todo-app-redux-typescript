import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Todo = {
  id: number,
  text: string,
  completed: boolean
}


type TodoState = {
  data: Todo[]
}

const initialState: TodoState = {
  data: []
}

const TodoSlice = createSlice({
  name: 'Todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      let newId: number;
      if (state.data.length === 0) {
        newId = 0
      } else {
        newId = state.data[state.data.length - 1].id + 1
      }
      state.data.push({
        id: newId,
        text: action.payload,
        completed: false
      })
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.data.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    clearCompleted: (state) => {
      state.data = state.data.filter(todo => !todo.completed);
    }

  }
})
export const { addTodo, toggleTodo, clearCompleted } = TodoSlice.actions
export default TodoSlice.reducer