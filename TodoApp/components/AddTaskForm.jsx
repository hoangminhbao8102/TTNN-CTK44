// AddTaskForm.js
import React, { useContext, useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { TaskContext } from './TaskContext';

export default function AddTaskForm() {
  const { addTask } = useContext(TaskContext);
  const [text, setText] = useState('');

  const handleSubmit = () => {
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
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Enter task..."
      />
      <Button title="Add Task" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
    paddingHorizontal: 10,
  },
});
