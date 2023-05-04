import { useState } from "react";
import AppModal from "./AppModal";

const TodoList = ({ className, list, handleDelete }) => {
  const [modal, setModal] = useState(false);
  const handleModalShown = (isShown) => {
    setModal(isShown);
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
      <AppModal modal={modal} handleShowHide={handleModalShown}>
        Hey yo
      </AppModal>
    </>
  );
};

export default TodoList;
