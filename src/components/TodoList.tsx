import { useState } from "react";
import AppModal from "./AppModal";
import TodoListItem from "./TodoListItem";
import { useDispatch } from "react-redux";
import { editTodo } from "../store/todoSlice";
import { TodoItem } from "../types/TodoItem";

interface TodoListProps {
  className: String;
  list: TodoItem[];
  handleDelete: (id: number) => void;
}

const TodoList = ({ className, list, handleDelete }: TodoListProps) => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [currentItem, setCurrentItem] = useState<TodoItem | null>(null);

  const handleKeyUp: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    const el = event.target as HTMLInputElement;
    const value = el.value;
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

  const handleUpdate = (item: TodoItem) => {
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
      <AppModal
        modal={modal}
        setModal={setModal}
        header={(id) => (
          <h3 id={id} className="fs-5">
            Update {currentItem?.name}
          </h3>
        )}
      >
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
