import React, { useState } from "react";

//getting props
export function FormPage({
  inputValue,
  setInputValue,
  task,
  setTask,
  inputRef,
}) {
  const [error, setError] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputValue.contain) {
      setError("⚠️ Please Enter A Work To Do.");
      return;
    }
    if (task.some((taskItem) => taskItem.contain === inputValue.contain)) {
      setInputValue({ id: "", contain: "", isChaked: false });
      setError(`⚠️ Same Work ! Add Another.`);
      return;
    }
    const updatedTasks = [...task, inputValue];
    setTask(updatedTasks);
    setInputValue({ id: "", contain: "", isChaked: false });
    setError("");
    localStorage.setItem("Todo Work", JSON.stringify(updatedTasks));
  };
  const getRandomKey = () => {
    return Math.floor(1000 + Math.random() * 9000);
  };
  return (
    <>
      {" "}
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter To Do Here...🖋️🖋️🖋️"
          value={inputValue.contain}
          onChange={(event) =>
            setInputValue({
              id: getRandomKey(),
              contain: event.target.value,
              isChaked: false,
            })
          }
        />
        <button type="submit" className="border-0 addbtn">
          <i className="fa-solid fa-plus"></i>
        </button>
      </form>
      <div className="warning">
       {error}
      </div>
    </>
  );
}
