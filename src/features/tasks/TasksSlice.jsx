import { createSlice } from "@reduxjs/toolkit";

const getTasksFromLS = () => {
  return JSON.parse(localStorage.getItem("tasks")) || [];
};

const setTasksToLS = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: getTasksFromLS(),
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
      setTasksToLS(state);
    },
    removeTask: (state, action) => {
      const updatedTasks = state.filter((task) => task.id !== action.payload);
      setTasksToLS(updatedTasks);
      return updatedTasks;
    },
    toggleTask: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      task.isChaked = !task.isChaked;
      setTasksToLS(state);
    },
    editTask: (state, action) => {
      const { id, newcontent } = action.payload;
      const task = state.find((task) => task.id === id);
      task.contain = newcontent;
    },
    clearAllTasks: () => {
      localStorage.removeItem("tasks");
      return [];
    },
  },
});

export const { addTask, removeTask, toggleTask, clearAllTasks, editTask } =
  tasksSlice.actions;
export default tasksSlice.reducer;
