"use client";

import { Task, useTaskStore } from "@/store/store";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import { useState } from "react";

const KanbanBoard = () => {
  const { tasks, addTask, reorderTasks, deleteTask } = useTaskStore();
  const [newTask, setNewTask] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const columns: Task["status"][] = ["Todo", "In Progress", "Done", "Testing"];

  const handleDragEnd = (result: DropResult) => {
    const { source, destination, draggableId } = result;
    if (!destination) return;

    const newTasks = [...tasks];

    if (source.droppableId === destination.droppableId) {
      const columnTasks = newTasks.filter(
        (task) => task.status === source.droppableId
      );
      const [movedTask] = columnTasks.splice(source.index, 1);
      columnTasks.splice(destination.index, 0, movedTask);

      const updatedTasks = newTasks.filter(
        (task) => task.status !== source.droppableId
      );
      reorderTasks([...updatedTasks, ...columnTasks]);
    } else {
      const taskToMove = newTasks.find((task) => task.id === draggableId);
      if (taskToMove) {
        taskToMove.status = destination.droppableId as Task["status"];
        reorderTasks(newTasks);
      }
    }
  };

  const handleAddTask = () => {
    if (!newTask.trim()) return;
    addTask({ id: crypto.randomUUID(), title: newTask, status: "Todo" });
    setNewTask("");
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mt-4 mb-8">Kanban Task Manager</h1>

      <div className="mb-6 justify-between flex items-center gap-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search tasks..."
          className="border p-2 w-80 rounded-lg"
        />

        <div className="flex items-center">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter new task"
            className="border p-2 w-80 rounded-lg mr-4"
          />
          <button
            onClick={handleAddTask}
            className="bg-purple-500 text-white px-4 py-2 rounded-lg"
          >
            Add Task
          </button>
        </div>
      </div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-4 gap-4">
          <h2 className="text font-semibold mb-2 text-gray-700">Todo</h2>
          <h2 className="text font-semibold mb-2 text-gray-700">In progress</h2>
          <h2 className="text font-semibold mb-2 text-gray-700">Completed</h2>
          <h2 className="text font-semibold mb-2 text-gray-700">Testing</h2>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {columns.map((col) => (
            <Droppable key={col} droppableId={col}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={`p-4 rounded-md shadow-md min-h-[550px] transition-all ${
                    snapshot.isDraggingOver
                      ? "bg-purple-100 border border-purple-300"
                      : "bg-gray-200"
                  }`}
                >
                  {filteredTasks
                    .filter((task) => task.status === col)
                    .map((task, index) => (
                      <Draggable
                        key={task.id}
                        draggableId={task.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`bg-white p-2 rounded shadow mb-2 flex justify-between items-center transition-all ${
                              snapshot.isDragging
                                ? "shadow-lg scale-105"
                                : "shadow-md"
                            }`}
                          >
                            <span>{task.title}</span>
                            <button
                              onClick={() => deleteTask(task.id)}
                              className="text-red-500"
                            >
                              ✖
                            </button>
                          </div>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default KanbanBoard;
