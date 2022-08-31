import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

import { mockTasks, ITask } from "./mock";

import { Header } from "./components/Header";
import { CreateTask } from "./components/CreateTask";
import { Task } from "./components/Task";

import clipboardLogo from "./assets/clipboard-logo.svg";
import styles from "./App.module.css";
import "./global.css";

export function App() {
  const [tasks, setTasks] = useState(mockTasks);

  function createNewTask(contentTask: string) {
    const newTask: ITask = {
      id: uuidv4(),
      isCompleted: false,
      content: contentTask,
    };

    setTasks([...tasks, newTask]);
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeleteOne = tasks.filter((task) => {
      return task.id !== taskToDelete;
    });

    setTasks(tasksWithoutDeleteOne);
  }

  function changeTaskCompleted(id: string) {
    const changeTaskCompleted = tasks.map((task) => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted;
      }
      return task;
    });

    setTasks(changeTaskCompleted);
  }

  const countTasksCreated = tasks.length;
  const countTasksCompleted = tasks.filter((task) => task.isCompleted).length;
  const onFlatListEmpty = () => {
    if (!tasks.length) {
      return (
        <div className={styles.tasksEmpty}>
          <img src={clipboardLogo} alt="Imagem de um clipboard" />
          <label>Você ainda não tem tarefas cadastradas</label>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
      );
    }
  };

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <CreateTask onCreateNewTask={createNewTask} />

        <div className={styles.infoTasks}>
          <label className={styles.infoTasksCreated}>
            Tarefas criadas <span>{countTasksCreated}</span>
          </label>
          <label className={styles.infoTasksCompleted}>
            Concluídas
            <span>{`${countTasksCompleted} de ${countTasksCreated}`}</span>
          </label>
        </div>

        {onFlatListEmpty()}

        {tasks.map((task) => {
          return (
            <Task
              key={task.id}
              id={task.id}
              isCompleted={task.isCompleted}
              content={task.content}
              onDeleteTask={deleteTask}
              onChangeTaskCompleted={changeTaskCompleted}
            />
          );
        })}
      </div>
    </div>
  );
}
