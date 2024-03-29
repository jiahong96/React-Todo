import { TodoItem } from "../types/TodoItem";

interface TodoListItemProps {
  item: TodoItem;
  handleDelete: (id: number) => void;
  handleUpdate: (item: TodoItem) => void;
}

const TodoListItem = ({
  item,
  handleDelete,
  handleUpdate,
}: TodoListItemProps) => {
  return (
    <li
      key={item.id}
      className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
    >
      <span>{item.name}</span>
      <div className="d-flex gap-3">
        <button
          className="btn btn-primary"
          onClick={() => {
            handleUpdate(item);
          }}
        >
          Update
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            handleDelete(item.id);
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoListItem;
