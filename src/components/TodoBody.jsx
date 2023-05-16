import SearchInput from "./SearchInput";
import TodoList from "./TodoList";
import { useMemo, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const TodoBody = ({ className }) => {
  const user = useContext(UserContext);
  const [todoList, setTodoList] = useState([
    { id: 1, name: "hey" },
    { id: 2, name: "heyyo" },
  ]);
  const [search, setSearch] = useState(null);

  const getFilteredTodoList = (todos, search) => {
    if (!search) return todos;
    return todos.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  };

  console.time("filter arr");
  const filteredTodoList = useMemo(() => {
    console.log("memo");
    return getFilteredTodoList(todoList, search);
  }, [todoList, search]);
  console.timeEnd("filter arr");

  const handleKeyUp = (event) => {
    const value = event.target.value;
    if (event.key === "Enter" && value) {
      setTodoList([...todoList, { id: todoList.length + 1, name: value }]);
      event.target.value = "";
    }
  };
  const handleSearchInput = (event) => {
    const value = event.target.value;
    setSearch(value);
  };

  const handleDelete = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  return (
    <div className={`${className}`}>
      <SearchInput
        type="search"
        placeholder="Search"
        handleInput={handleSearchInput}
        className="mb-4"
      />

      <div className="card p-3">
        <h2 className="card-title align-self-start fs-5">{`${user.name}, What chu wanna do?`}</h2>
        <input
          type="text"
          className="form-control"
          placeholder="Add to do, e.g. Sleeping at 7am"
          onKeyUp={handleKeyUp}
        />

        <TodoList
          className="mt-5"
          setTodoList={setTodoList}
          list={filteredTodoList}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default TodoBody;
