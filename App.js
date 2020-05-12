import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Navbar } from './src/Navbar';
import { Apptodo } from './Apptodo';

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar title = 'Todo App'/>
      <Apptodo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
