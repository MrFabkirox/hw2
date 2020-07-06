import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TextInput, Button } from 'react-native';

export default class NamePwdContComp extends Component {

  constructor() {
    super()
    this.state = {}
    this.buttonPressed = this.buttonPressed.bind(this)
  }

  buttonPressed() {
    console.log('Controlled component send ', this.state.username, this.state.password);
  }

  render() {
    return (

      <View style={styles.containerComponent}>
        <Text>NamePwdContComp</Text>

        <Text>Name</Text>
        <TextInput
          defaultValue={this.state.username}
          onChangeText={text => this.setState({ username: text })}
        />

        <Text>Pwd</Text>
        <TextInput
          defaultValue={this.state.password}
          onChangeText={text => this.setState({ password: text })}
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

AppRegistry.registerComponent('NamePwdContComp', () => NamePwdContComp);
