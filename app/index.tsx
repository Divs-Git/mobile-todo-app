import { StyleSheet, TextInput, View } from 'react-native';
import { TodoItem } from './TodoItem';
import { theme } from './theme';
import { useState } from 'react';

type todoItem = {
  todoValue: string;
  isCompleted?: boolean;
};

export default function HomeScreen() {
  const [newTodo, setNewTodo] = useState<string>('');
  const [todoList, setTodoList] = useState<todoItem[]>([]);

  function handleChange(data: string) {
    setNewTodo(data);
  }

  function handleSubmit() {
    setTodoList([...todoList, { todoValue: newTodo, isCompleted: false }]);
    setNewTodo('');
  }

  function handleTodoComplete(index: number) {
    const newTodoList = todoList.map((todo, i) => {
      if (i === index) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodoList(newTodoList);
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
        <TodoItem
          key={index}
          todoValue={todo.todoValue}
          isCompleted={todo.isCompleted}
          markComplete={() => handleTodoComplete(index)}
        />
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
