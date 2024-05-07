import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';
import { TaskProvider } from './components/TaskContext';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ToDo List</Text>
      <TaskProvider>
        <AddTaskForm />
        <TaskList />
      </TaskProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});