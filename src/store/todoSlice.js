import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todoList",
  initialState: {
    todoList: [
      { id: 1, name: "hey" },
      { id: 2, name: "heyyo" },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    editTodo: (state, action) => {
      state.todoList = state.todoList.map((item) => {
        if (item.id !== action.payload.id) return item;

        return { ...item, name: action.payload.name };
      });
    },
    deleteTodo: (state, action) => {
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
