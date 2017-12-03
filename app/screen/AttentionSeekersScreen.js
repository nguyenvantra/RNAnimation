/**
 * @author nguyenvantra
 * @email dkdarknessnvt@gmail.com
 * @create date 2017-12-02 10:19:29
 * @modify date 2017-12-02 10:19:29
 * @version 1.0.0
 * @since 1.0.0
 * @desc AttentionSeekers screen
*/

import React, { Component } from 'react';
import { View, Animated, Text } from 'react-native';

import ControlAnim from '../components/ControlAnim';
import styles from './styles';
import Strings from '../resources/Strings';
import { AttentionSeekersAnimTypes } from '../animTypes/AnimTypes';

export default class AttentionSeekersScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animSelected: AttentionSeekersAnimTypes[0].value
    };
    this.anim = new Animated.Value(0);
  }

  componentDidMount() {
    this.animStart();
  }

  componentDidUpdate(prevProps, prevState) {
    this.animStart();
  }

  animStart = () => {
    console.log('Onclick Animation...');
    this.anim.setValue(0);
    Animated.timing(
      this.anim,
      {
        toValue: 1,
        duration: 1000
      }
    ).start();
  }

  getStyleAnim = () => {
    switch (this.state.animSelected) {
      case 'bounce':
        const translateY = this.anim.interpolate({
          inputRange: [0, 0.2, 0.4, 0.43, 0.53, 0.7, 0.8, 0.9, 1],
          outputRange: [0, 0, -30, -30, 0, -15, 0, -4, 0]
        });
        return {
          transform: [{ translateY }]
        };
      case 'flash':
        const opacity = this.anim.interpolate({
          inputRange: [0, 0.25, 0.5, 0.75, 1],
          outputRange: [1, 0, 1, 0, 1]
        });
        return {
          opacity: opacity
        }
      case 'jello':
        const skewX = this.anim.interpolate({
          inputRange: [0, 0.111, 0.222, 0.333, 0.444, 0.555, 0.666, 0.777, 0.888, 1],
          outputRange: ['0deg', '0deg', '-12.5deg', '6.25deg', '-3.125deg', '1.5625deg', '-0.78125deg', '0.390625deg', '-0.1953125deg', '0deg']
        });

        const skewY = this.anim.interpolate({
          inputRange: [0, 0.111, 0.222, 0.333, 0.444, 0.555, 0.666, 0.777, 0.888, 1],
          outputRange: ['0deg', '0deg', '-12.5deg', '6.25deg', '-3.125deg', '1.5625deg', '-0.78125deg', '0.390625deg', '-0.1953125deg', '0deg']
        });
        return {
          transform: [{ skewX }, { skewY }]
        }
      case 'pulse':
        const scale = this.anim.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [1, 1.05, 1]
        });
        return {
          transform: [{ scale }]
        }
      case 'rotate':
        const rotate = this.anim.interpolate({
          inputRange: [0, 0.25, 0.5, 0.75, 1],
          outputRange: ['0deg', '90deg', '180deg', '270deg', '360deg']
        });
        return {
          transform: [{ rotate }]
        }
      case 'shake':
        const translateX = this.anim.interpolate({
          inputRange: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
          outputRange: [0, -10, 10, -10, 10, -10, 10, -10, 10, -10, 0]
        });
        return {
          transform: [{ translateX }]
        }
      case 'swing':
        const swingRotate = this.anim.interpolate({
          inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
          outputRange: ['0deg', '15deg', '-10deg', '5deg', '-5deg', '0deg']
        });
        return {
          transform: [{ rotate: swingRotate }]
        }
      case 'rubberBand':
        const scaleX = this.anim.interpolate({
          inputRange: [0, 0.3, 0.4, 0.5, 0.65, 0.75, 1],
          outputRange: [1, 1.25, 0.75, 1.15, 0.95, 1.05, 1]
        });
        const scaleY = this.anim.interpolate({
          inputRange: [0, 0.3, 0.4, 0.5, 0.65, 0.75, 1],
          outputRange: [1, 0.75, 1.25, 0.85, 1.05, 0.95, 1]
        });
        return {
          transform: [{ scaleX }, { scaleY }]
        }
      case 'tada':
        const tadaScale = this.anim.interpolate({
          inputRange: [0, 0.1, 0.2, 0.3, 0.9, 1],
          outputRange: [1, 0.9, 0.9, 1.1, 1.1, 1]
        });
        const tadaRotate = this.anim.interpolate({
          inputRange: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
          outputRange: ['0deg', '-3deg', '-3deg', '-3deg', '3deg', '-3deg', '3deg', '-3deg', '3deg', '3deg', '0deg']
        });
        return {
          transform: [{ scale: tadaScale }, { rotate: tadaRotate }]
        }
      case 'wobble':
        const wobbleTranslateX = this.anim.interpolate({
          inputRange: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 1],
          outputRange: [0, -25, 20, -15, 10, -5, 0]
        });
        const wobbleRotate = this.anim.interpolate({
          inputRange: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 1],
          outputRange: ['0deg', '-5deg', '3deg', '-3deg', '2deg', '-1deg', '0deg']
        });
        return {
          transform: [{ translateX: wobbleTranslateX }, { rotate: wobbleRotate }]
        }
      default:
        break;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ControlAnim
          data={AttentionSeekersAnimTypes}
          value={this.state.animSelected}
          label={Strings.attentionSeekers}
          onChangeText={value => this.setState({ animSelected: value })}
          onClick={() => this.animStart()} />
        <View style={styles.containerTextAnim}>
          <Animated.Text style={[styles.contextAnim, this.getStyleAnim()]}>
            {Strings.contentTextAnim}
          </Animated.Text>
        </View>
      </View>
    );
  }
}

