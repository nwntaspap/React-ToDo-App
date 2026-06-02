import { useState } from 'react';

function ToDoForm({ onAddTodo }) {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) {
      setError('To do cannot be empty');
      return;
    }

    // Send text to App
    onAddTodo(input.trim());
    setInput(''); // Clear input
  };

  const handleInput = (e) => {
    setInput(e.target.value);
    setError(''); // reset error on user input
  };

  return (
    <div className="form-wrapper">
      <form className="todo-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="todo-text" className="todo-label">
            Add Something
          </label>
          <input
            type="text"
            value={input}
            onChange={handleInput}
            id="todo-text"
            className="todo-input"
            placeholder="Add a thing to do"
          />
        </div>

        {/* Error message - only shown when there's an error */}
        {error && (
          <div className="error-wrapper">
            <span className="error-msg">{error}</span>{' '}
          </div>
        )}

        <button type="submit" className="submit-btn">
          Add ToDo
        </button>
      </form>
    </div>
  );
}

export default ToDoForm;
