import { useDispatch } from "react-redux";
import { MdClose } from "react-icons/md";
import css from "./Task.module.css";
import { deleteTask, toggleComplete } from "redux/operations";

export const Task = ({ task }) => {
  const dispatch = useDispatch()
  const handleRemove = (e) => {
    e.preventDefault();
    dispatch(deleteTask(task.id))
  };
  const handleToggle = () => {
    dispatch(toggleComplete(task.id))
  }
  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={handleToggle}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleRemove}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
