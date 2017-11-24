/**
 * @author nguyenvantra
 * @email dkdarknessnvt@gmail.com
 * @create date 2017-11-24 11:39:24
 * @modify date 2017-11-24 11:39:24
 * @version 1.0.0
 * @since 1.0.0
 * @desc Animation fade view
*/

import React, { Component } from 'react';
import { Animated, View } from 'react-native';

export default class FadeView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fadeAnimation: new Animated.Value(0)
    }
  }

  componentDidMount() {
    Animated.timing(
      this.state.fadeAnimation,
      {
        toValue: 1,
        duration: 2000
      }
    ).start();
  }

  render() {
    const opacity = this.state.fadeAnimation;
    return (
      <Animated.View
        style={{
          width: 300,
          height: 100,
          backgroundColor: 'red',
          opacity
        }}>
      </Animated.View>
    );
  }
}
