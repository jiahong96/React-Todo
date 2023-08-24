import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TodoItem } from "../types/TodoItem";
import { v4 as uuidv4 } from 'uuid';

interface State {
  todoList: TodoItem[]
}

const initialState: State = {
  todoList: [
    { id: uuidv4(), name: "hey" },
    { id: uuidv4(), name: "heyyo" },
  ],
}

type TodoAction = PayloadAction<TodoItem>
type TodoActionWithId = PayloadAction<number>

export const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo: (state: State, action: TodoAction) => {
      state.todoList.push(action.payload);
    },
    editTodo: (state: State, action: TodoAction) => {
      state.todoList = state.todoList.map((item) => {
        if (item.id !== action.payload.id) return item;

        return { ...item, name: action.payload.name };
      });
    },
    deleteTodo: (state: State, action: TodoActionWithId) => {
      // Either Construct a new result array immutably and return it
      // return {
      //   todoList: state.todoList.filter((item) => item.id !== action.payload),
      // };

      // Or Construct a new array immutably
      // "Mutate" the existing state to save the new array
      state.todoList = state.todoList.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addTodo, editTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
