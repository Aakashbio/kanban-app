import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Task = {
  id: string;
  title: string;
  status: "Todo" | "In Progress" | "Done" | "Testing";
};

type TaskStore = {
  tasks: Task[];
  addTask: (task: Task) => void;
  deleteTask: (taskId: string) => void;
  reorderTasks: (newTasks: Task[]) => void;
};

export const useTaskStore = create<TaskStore>()(
  persist(
    (set) => ({
      tasks: [],
      addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
      deleteTask: (taskId) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== taskId),
        })),
      reorderTasks: (newTasks) => set(() => ({ tasks: newTasks })),
    }),
    {
      name: "kanban-storage",
    }
  )
);
