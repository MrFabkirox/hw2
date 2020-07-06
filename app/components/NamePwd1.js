import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TextInput } from 'react-native';

export default class NamePwd1 extends Component {

  constructor() {
    super()
    this.state = {
      username: "",
      password: ""
    }
    this.handleChangeText = this.handleChangeText.bind(this)
  }

  handleChangeText(newText) {
    console.log(`You entered ${newText}`);
    this.setState({
      value: newText
    })
  }

  render() {
    return (

      <View style={styles.containerComponent}>
        <Text>NamePwd1</Text>

        <Text>Name</Text>
        <TextInput
          onChangeText={this.handleChangeText}
        />

        <Text>Pwd</Text>
        <TextInput
          onChangeText={this.handleChangeText}
        />

        <Text>: {this.state.value}</Text>

      </View>

    )
  }
}
const styles = StyleSheet.create({
  containerComponent: {
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#B388EB',
    marginBottom: 3,
  },
  rowText: {
    flex: 1
  }
})

AppRegistry.registerComponent('NamePwd1', () => NamePwd1);
