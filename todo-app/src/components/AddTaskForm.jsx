import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TaskContext } from '../components/TaskContext';

function AddTaskForm() {
  const { addTask } = useContext(TaskContext);
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      const newTask = {
        id: uuidv4(),
        text: text.trim(),
      };
      addTask(newTask);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task..."
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTaskForm;
