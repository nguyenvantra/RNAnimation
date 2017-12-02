/**
 * @author nguyenvantra
 * @email dkdarknessnvt@gmail.com
 * @create date 2017-11-29 11:27:29
 * @modify date 2017-11-29 11:27:29
 * @version 1.0.0
 * @since 1.0.0
 * @desc ContextAmin component show animation
 */

import React, { Component } from 'react';
import { View, Text, Animated } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

export default class ContextAnim extends Component {
  static propTypes = {
    content: PropTypes.string,
    style: PropTypes.any
  }

  static defaultProps = {
    content: 'My Text'
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.Text style={[styles.contextAnim, ...this.props.style]}>
          {this.props.content}
        </Animated.Text>
      </View>
    );
  }
}

