import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import NamePwdContComp from './app/components/NamePwdContComp';
import TextInputHw from './app/components/TextInputHw';
import NamePwd1 from './app/components/NamePwd1';
import NamePwdRef from './app/components/NamePwdRef';

export default class App extends Component {

  constructor() {
    super()
    this.state = {}
    this.setState()
    this.state.customStyles = {
      color: 'black'
    }

    setInterval(() => {
      if (this.state.customStyles.color == '#2176FF') {
        this.setState({
          customStyles: {
            color: '#33A1FD'
          }
        })
      } else {
        this.setState({
          customStyles: {
            color: '#2176FF'
          }
        })
      }
    }, 1000)
  }

  render() {
    return (

      <View style={styles.container}>

        <Text style={[styles.textContent, this.state.customStyles]}>Hw2</Text>

        <View style={styles.top}>
          <Text>top</Text>

          <View style={styles.topLeft}>
            <Text>texttopLeft</Text>

            <NamePwdRef />
          </View>

          <View style={styles.topRight}>
            <Text>texttopRight</Text>

            <NamePwd1 />
          </View>

        </View>

        <View style={styles.bottom}>
          <Text>bottom</Text>

          <View style={styles.bottomLeft}>
            <Text>textbottomLeft</Text>

            <TextInputHw />
          </View>

          <View style={styles.bottomRight}>
            <Text>textbottomRight</Text>

            <NamePwdContComp />
          </View>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CC978E',
  },
  textContent: {
    color: '#2D2D2A',
    justifyContent: 'center',
    textAlign: 'center',
  },
  top: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    flexDirection: 'row',
    backgroundColor: '#CFFCFF'
  },
  topLeft: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#CFFCFF'
  },
  topRight: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#EAEFB1'
  },
  bottom: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    flexDirection: 'row',
    backgroundColor: '#AAEFDF'
  },
  bottomLeft: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#AAEFDF'
  },
  bottomRight: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#E9F7CA'
  },
});
