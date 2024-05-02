import React, { useContext, useState } from 'react';
import { TaskContext } from '../components/TaskContext';

function TaskList() {
  const { tasks, removeTask } = useContext(TaskContext);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTasks = tasks.filter(task =>
    task.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRemoveTask = (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      removeTask(id);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search tasks..."
      />
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => handleRemoveTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
