import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TaskList from '../components/TaskList';
import { TaskProvider } from '../components/TaskContext';
import { screen } from '@testing-library/react';

// Mock context provider
jest.mock('../components/TaskContext', () => ({
  TaskContext: jest.fn(),
}));

describe('TaskList component', () => {
  test('renders task list correctly', () => {
    // Mock tasks data
    const tasks = [
      { id: 1, text: 'Task 1' },
      { id: 2, text: 'Task 2' },
      { id: 3, text: 'Task 3' },
    ];

    // Mock context value
    const value = {
      tasks: tasks,
      removeTask: jest.fn(),
    };

    // Render TaskList with mocked context provider
    render(
      <TaskProvider value={value}>
        <TaskList />
      </TaskProvider>
    );

    // Assert that each task is rendered
    tasks.forEach(task => {
      expect(screen.getByText(task.text)).toBeInTheDocument();
    });
  });

  test('handles remove task correctly', () => {
    // Mock tasks data
    const tasks = [
      { id: 1, text: 'Task 1' },
      { id: 2, text: 'Task 2' },
      { id: 3, text: 'Task 3' },
    ];

    // Mock context value
    const value = {
      tasks: tasks,
      removeTask: jest.fn(),
    };

    // Render TaskList with mocked context provider
    render (
      <TaskProvider value={value}>
        <TaskList />
      </TaskProvider>
    );

    // Simulate click on delete button for the first task
    fireEvent.click(screen.getByText('Delete'));

    // Assert that removeTask function is called with correct task ID
    expect(value.removeTask).toHaveBeenCalledWith(1);
  });
});
