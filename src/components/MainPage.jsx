import "../styles/mainpage.css";
import { clearAllTasks } from "../features/tasks/TasksSlice.jsx";
import { GetCurrentDateTime } from "./DateAndTime.jsx";
import { FormPage } from "./FormPage.jsx";
import { TotalWorks } from "./totalworks.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
export function MainPage() {
  const task = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

  const inputRef = useRef(null);

  const handleClearAll = () => {
    dispatch(clearAllTasks());
  };

  return (
    <div className="container text-center main-box">
      <GetCurrentDateTime />
      <h1 className="py-3">
        <u>Todo List</u> 
      </h1>
      <FormPage inputRef={inputRef} />
      <TotalWorks inputRef={inputRef} />
      <button
        className={`btn btn-danger py-0 px-5 mb-2 ${task.length ? "" : "hide"}`}
        onClick={handleClearAll}>
        Clear All
      </button>
    </div>
  );
}
