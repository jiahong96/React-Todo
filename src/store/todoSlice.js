import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todoList",
  initialState: { todoList: [] },
  reducers: {
    addTodo: (state, action) => {
      state.todoList = state.todoList.push(action.payload);
    },
    editTodo: (state, action) => {
      console.log("edit");
    },
    deleteTodo: (state, action) => {
      console.log("delete");
    },
  },
});
console.log(todoSlice);
export const { addTodo, editTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
