import ToDoItem from './ToDoItem.jsx';

function TodoList({ todos, onToggleDone, onDeleteToDo }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onToggleDone={onToggleDone}
          onDeleteToDo={onDeleteToDo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
