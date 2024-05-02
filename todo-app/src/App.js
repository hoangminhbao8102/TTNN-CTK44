import React from 'react';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';
import { TaskProvider } from './components/TaskContext';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <TaskProvider>
        <AddTaskForm />
        <TaskList />
      </TaskProvider>
    </div>
  );
}

export default App;
