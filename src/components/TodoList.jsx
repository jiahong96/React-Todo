import { useState } from "react";
import AppModal from "./AppModal";
import TodoListItem from "./TodoListItem";
import { useDispatch } from "react-redux";
import { editTodo } from "../store/todoSlice";

const TodoList = ({ className, list, handleDelete }) => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const handleKeyUp = (event) => {
    const value = event.target.value;
    if (event.key === "Enter" && value) {
      dispatch(editTodo({ id: currentItem.id, name: value }));
      // setTodoList(
      //   list.map((item) => {
      //     if (item.id !== currentItem.id) return item;

      //     return { ...item, name: value };
      //   })
      // );
      setCurrentItem(null);
      setModal(false);
    }
  };
  const handleUpdate = (item) => {
    setCurrentItem(item);
    setModal(true);
  };

  const listItems = list.map((item) => (
    <TodoListItem
      key={item.id}
      item={item}
      handleDelete={handleDelete}
      handleUpdate={handleUpdate}
    />
  ));

  return (
    <>
      <ul className={`list-group ${className}`}>{listItems}</ul>
      <AppModal modal={modal} setModal={setModal}>
        <input
          type="text"
          className="form-control"
          defaultValue={currentItem?.name}
          key={currentItem?.id}
          onKeyUp={handleKeyUp}
        />
      </AppModal>
    </>
  );
};

export default TodoList;
