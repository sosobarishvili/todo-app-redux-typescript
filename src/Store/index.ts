import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from './TodoSlice'

export const store = configureStore({
  reducer: {
    addTodo: TodoReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

