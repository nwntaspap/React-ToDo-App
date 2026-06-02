function ToDoItem({ todo, onToggleDone, onDeleteToDo }) {
  const handleCheckbox = () => {
    onToggleDone(todo.id);
  };

  const handleDelete = () => {
    onDeleteToDo(todo.id);
  };

  return (
    <li className="todo-item">
      <input type="checkbox" checked={todo.done} onChange={handleCheckbox} id={`todo-${todo.id}`} />

      <label htmlFor={`todo-${todo.id}`} className={todo.done ? 'done-text' : ''}>
        {todo.text}
      </label>

      <button className="delete-btn" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}

export default ToDoItem;
