import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Store";
import { toggleTodo, clearCompleted } from "../Store/TodoSlice";
import check from '../assets/icon-check.svg';
import cross from '../assets/icon-cross.svg'
import { useState } from "react";

const TodoList = () => {
  const list = useSelector((state: RootState) => state.addTodo.data);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('all');

  const handleToggle = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };

  const filteredList = list.filter((item) => {
    if (filter === 'active') return !item.completed;
    if (filter === 'completed') return item.completed;
    return true;
  });

  const getFilterClass = (filterName: string) => {
    return filter === filterName ? 'active-filter' : '';
  };

  return (
    <div className="list-whole-container">
      <ul>
        {filteredList.map((item) => (
          <li
            className={`list-todo ${item.completed ? 'completed' : ''}`}
            key={item.id}
            onClick={() => handleToggle(item.id)}
          >
            <div className="todo-list-line">
              <div className="left-todo-list">
                {item.completed && (
                  <img className="check-icon" src={check} alt="check-icon" />
                )}
              </div>
              <div className="todo-text-right">
                {item.text}
              </div>
            </div>
            <img className="cross" src={cross} alt="cross" />
          </li>
        ))}
      </ul>
      <div className="statistics">
        <div className="items-left">
          {list.filter(item => !item.completed).length} items left
        </div>
        <div className="status-list">
          <span className={getFilterClass('all')} onClick={() => setFilter('all')}>All</span>
          <span className={getFilterClass('active')} onClick={() => setFilter('active')}>Active</span>
          <span className={getFilterClass('completed')} onClick={() => setFilter('completed')}>Completed</span>
        </div>
        <div className="clear-completed" onClick={handleClearCompleted}>
          Clear Completed
        </div>
      </div>
      <div className="statistics-responsive">
        <div className="responsive-items">
          <div className="items-left">
            {list.filter(item => !item.completed).length} items left
          </div>
          <div className="clear-completed" onClick={handleClearCompleted}>
            Clear Completed
          </div>
        </div>
        <div className="status-list">
          <span className={getFilterClass('all')} onClick={() => setFilter('all')}>All</span>
          <span className={getFilterClass('active')} onClick={() => setFilter('active')}>Active</span>
          <span className={getFilterClass('completed')} onClick={() => setFilter('completed')}>Completed</span>
        </div>
      </div>
    </div>
  );
};

export default TodoList;