import React from "react";
import "./styles.css";
import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/TaskList/TaskList";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <TaskList title = "A fazer" />
        <TaskList title = "Em andamento" />
        <TaskList title = "Concluído" />
      </div>
    </div>
  );
}
