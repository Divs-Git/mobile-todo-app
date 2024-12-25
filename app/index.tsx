import { StyleSheet, View } from 'react-native';
import { TodoItem } from './TodoItem';
import { theme } from './theme';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <TodoItem todoValue='Get Groceries' />
      <TodoItem todoValue='Do Homework' isCompleted={true} />
      <TodoItem todoValue='Make Dinner' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    justifyContent: 'center',
  },
});
