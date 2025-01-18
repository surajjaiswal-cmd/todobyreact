import React, { useState, useRef } from "react";
import "./mainpage.css";
import { GetCurrentDateTime } from "./dateandtime.jsx";
import { FormPage } from "./formPage.jsx";
import { TotalWorks } from "./totalworks.jsx";

export function MainPage() {
  const [inputValue, setInputValue] = useState({
    id: "",
    contain: "",
    isChaked: false,
  });

  const [task, setTask] = useState(() => {
    return JSON.parse(localStorage.getItem("Todo Work")) || [];
  });

  const inputRef = useRef(null);

  const handleClearAll = () => {
    setTask([]);
    localStorage.removeItem("Todo Work");
  };

  return (
    <div className="container text-center main-box">
      <GetCurrentDateTime />
      <h1 className="py-3">
        <u>Todo List</u> 📘
      </h1>
      {/* sending function in props to child components */}
      <FormPage
        inputValue={inputValue}
        setInputValue={setInputValue}
        task={task}
        setTask={setTask}
        inputRef={inputRef}
      />

      <TotalWorks
        setInputValue={setInputValue}
        task={task}
        setTask={setTask}
        inputRef={inputRef}
      />
      <button
        className={`btn btn-danger py-0 px-5 mb-2 ${task.length ? "" : "hide"}`}
        onClick={handleClearAll}>
        Clear All
      </button>
    </div>
  );
}
