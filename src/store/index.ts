import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducer from "./todoSlice";

const store = configureStore({
  reducer: {
    todoList: todoSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>

export default store