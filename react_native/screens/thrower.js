import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  button: {
    flexDirection: 'column',
    width: 250,
    height: 250,
    padding: 10,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'tomato',
    marginTop: 250,
    borderRadius: 250
  }
});

export default class ThrowerScreen extends Component {
  constructor() {
    super();
  }

  throwException() {
    throw new Error('Something went wrong!')
  }

  render() {
    return(
      <TouchableOpacity
        style={ styles.button }
        onPress={() => this.throwException()}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 70}}>
          Throw
        </Text>
        <Text style={{ fontSize: 24, fontWeight: 'bold'}}>
          Exception
        </Text>
      </TouchableOpacity>
    );
  }
}
