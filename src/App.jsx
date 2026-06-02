import { useState } from 'react';
import ToDoForm from './TodoForm.jsx';
import TodoList from './ToDoList.jsx';

function App() {
  const [todos, setToDos] = useState([]);

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

  return (
    <div>
      <header>
        <h1 className="todo-heading">React Todo App</h1>
      </header>

      <div className="app-container">
        <ToDoForm onAddTodo={addToDo} />

        {/* Add empty state if no todos */}
        {todos.length === 0 ? (
          <p>No todos to show, add some</p>
        ) : (
          <TodoList todos={todos} onToggleDone={toggleToDo} onDeleteToDo={deleteToDo} />
        )}
      </div>

      <footer className="todo-footer">
        Made with React, Vite, lots of curiosity and 💚 by <span className="author">nwntaspap</span>
      </footer>
    </div>
  );
}

export default App;
