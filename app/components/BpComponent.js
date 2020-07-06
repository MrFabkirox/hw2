import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';

export default class BpComponent extends Component {

  render() {
    return (

      <View style={styles.containerComponent}>
        <Text>BpComponent</Text>
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

AppRegistry.registerComponent('BpComponent ', () => BpComponent);
