import TodoList from "./TodoList";
import { useState } from "react";

const TodoBody = ({ className }) => {
  const [todoList, setTodoList] = useState([
    { id: 1, name: "hey" },
    { id: 2, name: "heyyo" },
  ]);

  const handleKeyUp = (event) => {
    const value = event.target.value;
    if (event.key === "Enter" && value) {
      setTodoList([...todoList, { id: todoList.length + 1, name: value }]);
      event.target.value = "";
    }
  };

  const handleDelete = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  return (
    <div className={`card p-3 ${className}`}>
      <h2 className="card-title align-self-start fs-5">What chu wanna do?</h2>
      <input
        type="text"
        className="form-control"
        placeholder="Add to do, e.g. Sleeping at 7am"
        onKeyUp={handleKeyUp}
      />

      <TodoList className="mt-5" list={todoList} handleDelete={handleDelete} />
    </div>
  );
};

export default TodoBody;
