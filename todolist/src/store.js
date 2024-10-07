import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/addReducer";

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;
