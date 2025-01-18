export function TotalWorks({ setInputValue, task, setTask, inputRef }) {
  const handleEdit = (item) => {
    setInputValue(item);
    const updatedTasks = task.filter((taskItem) => taskItem.id !== item.id);
    setTask(updatedTasks);
    localStorage.setItem("Todo Work", JSON.stringify(updatedTasks));
    inputRef.current.focus();
  };

  const handleDone = (item) => {
    const updatedTasks = task.map((taskItem) =>
      taskItem.id === item.id ? { ...taskItem, isChaked: true } : taskItem
    );
    setTask(updatedTasks);
    localStorage.setItem("Todo Work", JSON.stringify(updatedTasks));
  };

  const handleDelete = (item) => {
    const updatedTasks = task.filter((taskItem) => taskItem.id !== item.id);
    setTask(updatedTasks);
    localStorage.setItem("Todo Work", JSON.stringify(updatedTasks));
  };

  return (
    <ol className="todolist">
      {task.map((item) => (
        <div key={item.id} className="listitem ">
          <li className={`${item.isChaked ? "done" : ""}`}>
            <p>{item.contain}</p>
          </li>
          <div className="d-flex flex-nowrap">
            <button
              className="border-0 editbtn"
              onClick={() => handleEdit(item)}>
              ✏️
            </button>
            <button
              className={`border-0 donebtn ${item.isChaked ? "hide" : ""}`}
              onClick={() => handleDone(item)}>
              ✅
            </button>
            <button
              className="border-0 deletebtn"
              onClick={() => handleDelete(item)}>
              ❌
            </button>
          </div>
        </div>
      ))}
    </ol>
  );
}
