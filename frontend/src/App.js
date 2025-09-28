import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css"; 

import PlusIcon from "./imagens/icon_+.png";
import XIcon from "./imagens/icon_x.png";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await axios.get("/tasks");
      setTasks(res.data);
    } catch (error) {
      console.error("Erro ao buscar tarefas:", error);
    }
  };

  const addTask = async () => {
    if (!newTask.trim()) return;
    await axios.post("/tasks", { title: newTask });
    setNewTask("");
    fetchTasks();
  };

  const toggleTask = async (task) => {
    await axios.put(`/tasks/${task.id}`, {
      title: task.title,
      done: task.done ? 0 : 1,
    });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`/tasks/${id}`);
    fetchTasks();
  };

  return (
    <div className="app-background">
      <div className="todo-card">
        <h1 className="title">To-Do List</h1>
        <div className="title-underline"></div>

        <div className="input-area">
          <input
            type="text"
            placeholder="Digite sua tarefa..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button className="add" onClick={addTask}>
            <img src={PlusIcon} alt="Adicionar" className="icon" />
          </button>
        </div>

        <ul>
          {tasks.map((task) => (
            <li key={task.id} className="todo-item">
              <span
                className={task.done ? "done" : ""}
                onClick={() => toggleTask(task)}
              >
                {task.title}
              </span>
              <button className="delete" onClick={() => deleteTask(task.id)}>
                <img src={XIcon} alt="Excluir" className="icon" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
