import { StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';

import { Provider } from 'react-redux';
import { store } from './src/app/store';
import Counter from './src/components/Counter';
import ButtonRedux from './src/components/ButtonRedux';
export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Counter />
        <ButtonRedux />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
