import { useState } from 'react';
import ToDoForm from './TodoForm.jsx';
import TodoList from './ToDoList.jsx';

function App() {
  const [todos, setToDos] = useState([]);
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'

  // receives the text and adds it to todos
  const addToDo = (text) => {
    setToDos([...todos, { id: Date.now(), text, done: false }]);
  };

  const toggleToDo = (id) => {
    setToDos(todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)));
  };

  const deleteToDo = (id) => {
    setToDos(todos.filter((todo) => todo.id !== id));
  };

  // Filter todos based on current filter
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.done;
    if (filter === 'completed') return todo.done;
    return true; // 'all' shows everything
  });

  // Count remaining todos
  const remainingCount = todos.filter((todo) => !todo.done).length;

  return (
    <div>
      <header>
        <h1 className="todo-heading">React Todo App</h1>
      </header>

      {/* Filter buttons */}
      <div className="filters">
        <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>
          All
        </button>
        <button className={filter === 'active' ? 'active' : ''} onClick={() => setFilter('active')}>
          Active
        </button>
        <button
          className={filter === 'completed' ? 'active' : ''}
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
      </div>

      <div className="app-container">
        <ToDoForm onAddTodo={addToDo} />

        {/* Empty state OR todo list */}
        {todos.length === 0 ? (
          <p className="empty-state">No todos yet. Add one above! ✨</p>
        ) : (
          <>
            <TodoList todos={filteredTodos} onToggleDone={toggleToDo} onDeleteToDo={deleteToDo} />
            <div className="todo-count">
              {remainingCount} {remainingCount === 1 ? 'item' : 'items'} left
            </div>
          </>
        )}
      </div>

      <footer className="todo-footer">
        Made with React, Vite, lots of curiosity and 💚 by <span className="author">nwntaspap</span>
      </footer>
    </div>
  );
}

export default App;
