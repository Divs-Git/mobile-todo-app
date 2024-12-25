import { StyleSheet, TextInput, View } from 'react-native';
import { TodoItem } from './TodoItem';
import { theme } from './theme';
import { useState } from 'react';

export default function HomeScreen() {
  const [newTodo, setNewTodo] = useState<string>('');
  const [todoList, setTodoList] = useState<string[]>([]);

  function handleChange(data: string) {
    setNewTodo(data);
  }

  function handleSubmit() {
    setTodoList([...todoList, newTodo]);
    setNewTodo('');
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Enter a new todo ...'
        style={styles.textInput}
        value={newTodo}
        onChangeText={handleChange}
        returnKeyType='done'
        onSubmitEditing={handleSubmit}
      />
      {todoList.map((todo, index) => (
        <TodoItem key={index} todoValue={todo} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    justifyContent: 'center',
  },
  textInput: {
    margin: 20,
    padding: 10,
    borderColor: theme.lightBlue,
    borderWidth: 1,
    borderRadius: 50,
    fontSize: 20,
  },
});
