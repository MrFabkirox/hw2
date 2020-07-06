import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TextInput, Button } from 'react-native';

export default class NamePwdRef extends Component {

  constructor() {
    super()
    this.buttonPressed = this.buttonPressed.bind(this)
  }

  buttonPressed() {
    console.log(this._username, this._password);

    const username = this._username._lastNativeText;
    const password = this._password._lastNativeText;

    console.log(`Uncontrolled component send ${username}, ${password}`);
  }

  render() {
    return (

      <View style={styles.containerComponent}>
        <Text>NamePwdRef</Text>

        <Text>Name</Text>
        <TextInput
          ref={input => this._username = input}
        />

        <Text>Pwd</Text>
        <TextInput
          ref={input => this._password = input}
        />

        <Button title={"Say usr pwd"} onPress={this.buttonPressed}></Button>

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

AppRegistry.registerComponent('NamePwdRef', () => NamePwdRef);
