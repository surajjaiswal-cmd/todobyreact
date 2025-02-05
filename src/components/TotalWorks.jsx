import { useDispatch, useSelector } from "react-redux";
import { removeTask, toggleTask } from "../features/tasks/TasksSlice";
import { setInputValue } from "../features/input/InputSlice";

export function TotalWorks({ inputRef }) {
  const task = useSelector((state) => state.tasks);
  const input = useSelector((state) => state.input);
  const dispatch = useDispatch();

  const handleEdit = (item) => {
    dispatch(setInputValue(item.contain));
    dispatch(removeTask(item.id));
    inputRef.current.focus();
  };

  const handleDone = (id) => {
    dispatch(toggleTask(id));
  };

  const handleDelete = (id) => {
    dispatch(removeTask(id));
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
              onClick={() => handleDone(item.id)}>
              ✅
            </button>
            <button
              className="border-0 deletebtn"
              onClick={() => handleDelete(item.id)}>
              ❌
            </button>
          </div>
        </div>
      ))}
    </ol>
  );
}
