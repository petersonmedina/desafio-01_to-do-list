import { Check, Trash } from "phosphor-react";
import styles from "./Task.module.css";
import { ITask } from "../mock";

interface ITaskProps extends ITask {
  onDeleteTask: (id: string) => void;
  onChangeTaskCompleted: (id: string) => void;
}

export function Task({
  id,
  isCompleted,
  content,
  onDeleteTask,
  onChangeTaskCompleted,
}: ITaskProps) {
  function handleChangeTaskCompleted() {
    onChangeTaskCompleted(id);
  }

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  return (
    <div className={styles.task}>
      <label className={styles.chk}>
        <input
          type="checkbox"
          name="exemplo"
          checked={isCompleted}
          onChange={handleChangeTaskCompleted}
        />
        <span>
          <Check size={16} />
        </span>
        <label className={styles.content}>{content}</label>
      </label>

      <button onClick={handleDeleteTask} title="Deletar comentário">
        <Trash size={24} />
      </button>
    </div>
  );
}
