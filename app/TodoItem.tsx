import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { theme } from './theme';

type TodoItemProps = {
  todoValue: string;
  isCompleted?: boolean;
};

export function TodoItem({ todoValue, isCompleted }: TodoItemProps) {
  function handlePress() {
    Alert.alert('Delete Todo', 'Are you sure you want to delete this todo?', [
      { text: 'Yes', onPress: () => console.log('Todo deleted') },
      { text: 'No', onPress: () => console.log('Todo not deleted') },
    ]);
  }
  return (
    <View style={styles.todoContainer}>
      <Text
        style={[
          styles.todoText,
          isCompleted ? styles.textCompleted : undefined,
        ]}
      >
        {todoValue}
      </Text>
      <TouchableOpacity
        style={[
          styles.button,
          isCompleted ? styles.buttonCompleted : undefined,
        ]}
        onPress={handlePress}
      >
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  todoContainer: {
    paddingVertical: 20,
    paddingHorizontal: 6,
    borderBottomWidth: 1,
    borderBlockColor: theme.lightBlue,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  todoText: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  button: {
    borderRadius: 5,
    padding: 6,
    backgroundColor: theme.lightRed,
  },
  buttonText: {
    color: theme.colorWhite,
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
  buttonCompleted: {
    backgroundColor: theme.gray,
  },

  textCompleted: {
    textDecorationLine: 'line-through',
    color: theme.gray,
  },
});
