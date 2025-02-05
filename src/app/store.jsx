import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../features/tasks/TasksSlice";
import inputReducer from "../features/input/InputSlice";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    input: inputReducer,
  },
});
export default store;
