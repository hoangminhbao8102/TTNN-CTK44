import React, { useContext, useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { TaskContext } from './TaskContext';

export default function TaskList() {
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
    <View>
      <TextInput
        style={styles.input}
        value={searchTerm}
        onChangeText={setSearchTerm}
        placeholder="Search tasks..."
      />
      <View style={styles.list}>
        {filteredTasks.map((task) => (
          <View key={task.id} style={styles.task}>
            <Text>{task.text}</Text>
            <Button title="Delete" onPress={() => handleRemoveTask(task.id)} />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  list: {
    marginTop: 10,
  },
  task: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});
