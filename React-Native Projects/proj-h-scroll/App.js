import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Horizontal from './components/Horizonatal.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Horizontal />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
