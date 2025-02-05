import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../features/tasks/TasksSlice";
import { setInputValue } from "../features/input/InputSlice";

export function FormPage({ inputRef }) {
  const [error, setError] = useState("");
  const input = useSelector((state) => state.input.value);
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const getRandomKey = () => Math.floor(1000 + Math.random() * 9000);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!input.trim()) {
      setError("⚠️ Please Enter A Task.");
      return;
    }
    if (tasks.some((taskItem) => taskItem.contain === input.trim())) {
      setError("⚠️ Duplicate Task! Please add something different.");
      return;
    }
    const newTask = {
      id: getRandomKey(),
      contain: input.trim(),
      isChecked: false,
    };
    dispatch(addTask(newTask));
    dispatch(setInputValue(""));
  };

  const handleOnCahnge = (event) => {
    dispatch(setInputValue(event.target.value));
    setError("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter Task...🖋️"
          value={input}
          onChange={(event) => handleOnCahnge(event)}
        />
        <button type="submit" className="border-0 addbtn">
          <i className="fa-solid fa-plus"></i>
        </button>
      </form>
      <div className="warning">{error}</div>
    </>
  );
}
