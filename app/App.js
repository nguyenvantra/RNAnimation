/**
 * @author nguyenvantra
 * @email dkdarknessnvt@gmail.com
 * @create date 2017-11-24 11:06:35
 * @modify date 2017-11-24 11:06:35
 * @version 1.0.0
 * @since 1.0.0
 * @desc index.js of application
*/


import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import FadeView from './components/FadeView';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FadeView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});