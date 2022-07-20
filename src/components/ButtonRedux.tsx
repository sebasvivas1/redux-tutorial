import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { useAppDispatch } from '../app/hooks';
import {
  increment,
  decrement,
  increaseByAmount,
  decreaseByAmount,
} from '../features/counter/counterSlice';

export default function ButtonRedux() {
  const dispatch = useAppDispatch();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => dispatch(increment())}
        style={styles.button}>
        <Text style={styles.text}>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => dispatch(decrement())}
        style={styles.button}>
        <Text style={styles.text}>Decrement</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => dispatch(increaseByAmount(10))}
        style={styles.button}>
        <Text style={styles.text}>Increment by 10</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => dispatch(decreaseByAmount(10))}
        style={styles.button}>
        <Text style={styles.text}>Decrease by 10</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 5,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});
