import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  button: {
    flexDirection: 'column',
    width: 300,
    height: 150,
    padding: 10,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'tomato',
    marginTop: 300,
    borderRadius: 15
  }
});

export default class SwitcherScreen extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.unsubscribe = this.props.navigation.addListener('focus', () => {
      if (this.props.route.params !== undefined) {
        if (this.props.route.params.isSwitching === true) {
          setTimeout(() => {
            this.props.navigation.navigate('Counter', {
                isSwitching: true
            });
          }, 30);
        }
      }
    });
  }

  startSwitching() {
    this.props.navigation.navigate('Counter', {
        isSwitching: true
    });
  }

  render() {
    return(
      <TouchableOpacity
        style={ styles.button }
        onPress={() => this.startSwitching()}>
        <Text style={{ fontSize: 24, marginTop: 25}}>
          Initiate
        </Text>
        <Text style={{ fontSize: 24 }}>
          Switch
        </Text>
      </TouchableOpacity>
    );
  }
}
