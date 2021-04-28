import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  view: {
    alignSelf: 'center'
  },
  number: {
    fontSize: 150,
    marginTop: 150,
    alignSelf: 'center'
  },
  plus: {
    width: 250,
    height: 75,
    paddingVertical: 5,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'lightgreen',
    borderRadius: 15
  },
  minus: {
    width: 200,
    height: 60,
    paddingVertical: 5,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'tomato',
    marginTop: 10,
    borderRadius: 15
  }
});

export default class CounterScreen extends Component {
  constructor() {
    super();

    this.state = {
      number: 0
    }
  }

  componentDidMount() {
    this.unsubscribe = this.props.navigation.addListener('focus', () => {
      if (this.props.route.params !== undefined) {
        if (this.props.route.params.isSwitching === true) {
          setTimeout(() => {
            this.props.navigation.navigate('Switcher', {
                isSwitching: true
            });
          }, 30);
        }
      }
    });
  }

  addToNumber() {
    let number = this.state.number;
    number += 1;
    this.setState({ number: number })
  }

  substractFromNumber(){
    let number = this.state.number;
    number -= 1;
    this.setState({ number: number })
  }

  render() {
    return(
      <View style={ styles.view }>
        <Text style={ styles.number }>{ this.state.number }</Text>
        <TouchableOpacity
          style={ styles.plus }
          onPress={ () => this.addToNumber() }>
          <Text style={{ fontSize: 40}}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={ styles.minus }
          onPress={ () => this.substractFromNumber() }>
          <Text style={{ fontSize: 30 }}>-</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
