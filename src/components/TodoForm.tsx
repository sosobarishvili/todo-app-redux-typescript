import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Store/TodoSlice";
import '../App.css';

const TodoForm = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;
    dispatch(addTodo(inputValue));
    setInputValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="todo-input"
        placeholder="Create a new todo..."
      />
    </form>
  );
}

export default TodoForm;