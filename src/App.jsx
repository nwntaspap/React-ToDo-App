import { useState } from 'react';
import ToDoForm from './TodoForm.jsx';

function App() {
  const [todos, setToDos] = useState([]);

  // receives the text and adds it to todos
  const addToDo = (text) => {
    setToDos([...todos, { id: Date.now(), text, done: false }]);
  };

  return (
    <div>
      <header>
        <h1 className="todo-heading">React Todo App</h1>
      </header>

      <div className="app-container">
        <ToDoForm onAddTodo={addToDo} />
      </div>
    </div>
  );
}

export default App;
