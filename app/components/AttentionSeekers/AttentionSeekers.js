/**
 * @author nguyenvantra
 * @email dkdarknessnvt@gmail.com
 * @create date 2017-11-26 11:28:46
 * @modify date 2017-11-26 11:28:46
 * @version 1.0.0
 * @since 1.0.0
 * @desc AttentionSeekers animation component 
*/

import React, { Component } from 'react';
import {
  Text,
  Animated,
  Easing,
  View,
  TouchableOpacity,
  Picker
} from 'react-native';

import Fonts from '../../resources/Fonts';
import styles from './styles';

export default class AttentionSeekers extends Component {
  constructor(props) {
    super(props);
    animTypes = ["bounce", "flash", "jello", "pulse", "rotate", "shake", "swing", "rubberBand", "tada", "wobble"];
    this.state = {
      animSelected: animTypes[0]
    }
    this.anim = new Animated.Value(0);
  }

  componentDidMount() {
    this.animStart();
  }

  componentDidUpdate(prevProps, prevState) {
    this.animStart();
  }

  animStart = () => {
    this.anim.setValue(0);
    Animated.timing(
      this.anim,
      {
        toValue: 1,
        duration: 1000,
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
      default:
        break;
    }
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Animated.Text
            style={[styles.animContext, this.getStyleAnim()]}>
            Animate
          </Animated.Text>
        </View>
        <View style={{
          flexDirection: 'row',
          padding: 20
        }}>
          <View style={{
            flex: 1,
            height: 50,
            borderColor: '#BDBDBD',
            borderWidth: 2,
            marginRight: 10
          }}>
            <Picker
              selectedValue={this.state.animSelected}
              onValueChange={value => this.setState({ animSelected: value })}
              mode="dropdown"
              style={{ flex: 1 }} >
              {animTypes.map((animType, index) => <Picker.Item key={index} label={animType} value={animType} />)}
            </Picker>
          </View>
          <TouchableOpacity onPress={() => this.animStart()}>
            <View style={{
              borderColor: '#fc4a1a',
              borderWidth: 2,
              height: 50,
              justifyContent: 'center',
              paddingHorizontal: 10,
            }}>
              <Text style={{
                fontFamily: Fonts.FontBold,
                fontSize: 16,
                fontWeight: 'bold',
                color: '#fc4a1a'
              }}>Animate it</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
