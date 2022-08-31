import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import styles from "./CreateTask.module.css";

interface ICreateTaskProps {
  onCreateNewTask: (content: string) => void;
}

export function CreateTask({ onCreateNewTask }: ICreateTaskProps) {
  const [newTaskText, setNewtaskText] = useState("");

  function handleChangeNewTask(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewtaskText(event.target.value);
  }

  function handleInvalidNewTask(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  function handleCreatedNewTask(event: FormEvent) {
    event.preventDefault();
    onCreateNewTask(newTaskText);
    setNewtaskText("");
  }

  const isNewTaskEmpty = newTaskText.length === 0;

  return (
    <form onSubmit={handleCreatedNewTask} className={styles.form}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTaskText}
        onChange={handleChangeNewTask}
        onInvalid={handleInvalidNewTask}
        required
      />
      <button type="submit" disabled={isNewTaskEmpty}>
        Criar <PlusCircle size={16} />
      </button>
    </form>
  );
}
