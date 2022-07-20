import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useAppSelector } from '../app/hooks';

export default function Counter() {
  const counterValue = useAppSelector(state => state.counter.value);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{counterValue}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: '100%',
  },
  text: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'green',
  },
});
