import { useState } from "react";
import AppModal from "./AppModal";

const TodoList = ({ className, list, setTodoList, handleDelete }) => {
  const [modal, setModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const handleKeyUp = (event) => {
    const value = event.target.value;
    if (event.key === "Enter" && value) {
      setTodoList(
        list.map((item) => {
          if (item.id !== currentItem.id) return item;

          return { ...item, name: value };
        })
      );
      setCurrentItem(null);
      setModal(false);
    }
  };

  const listItems = list.map((item) => (
    <li
      key={item.id}
      className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
    >
      <span>{item.name}</span>
      <div className="d-flex gap-3">
        <button
          className="btn btn-primary"
          onClick={() => {
            setCurrentItem(item);
            setModal(true);
          }}
        >
          Update
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            console.log("hey del");
            handleDelete(item.id);
          }}
        >
          Delete
        </button>
      </div>
    </li>
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
