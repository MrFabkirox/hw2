import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TextInput } from 'react-native';

export default class TextInputHw extends Component {

  constructor() {
    super()
    this.state = {
      value: "Edit Me"
    }
    this.handleChangeText = this.handleChangeText.bind(this)
  }

  handleChangeText(newText) {
    this.setState({
      value: newText
    })
  }

  render() {
    return (

      <View style={styles.containerComponent}>

        <Text>Editing: {this.state.value}</Text>

        <TextInput
          defaultValue={this.state.value}
          onChangeText={this.handleChangeText}
        />

        <Text>TextInput</Text>

      </View>

    )
  }
}
const styles = StyleSheet.create({
  containerComponent: {
    justifyContent: 'center',
    padding: 2,
    backgroundColor: '#B388EB',
    marginBottom: 1,
  },
  rowText: {
    flex: 1
  }
})

AppRegistry.registerComponent('TextInputHw', () => TextInputHw);

