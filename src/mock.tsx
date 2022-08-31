import { v4 as uuidv4 } from "uuid";

export interface ITask {
  id: string;
  isCompleted: boolean;
  content: string;
}

export const mockTasks: ITask[] = [
  // {
  //   id: uuidv4(),
  //   isCompleted: false,
  //   content: "Estudar ReactJS",
  // },
  // {
  //   id: uuidv4(),
  //   isCompleted: false,
  //   content: "Refazer lição de casa",
  // },
  // {
  //   id: uuidv4(),
  //   isCompleted: true,
  //   content: "Comprar frutas na feira",
  // },
  // {
  //   id: uuidv4(),
  //   isCompleted: true,
  //   content: "Limpar a mesa da cozinha",
  // },
];
