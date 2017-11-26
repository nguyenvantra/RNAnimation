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
  TouchableOpacity
} from 'react-native';

import Fonts from '../../resources/Fonts';

export default class AttentionSeekers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anim: new Animated.Value(0)
    }
  }

  componentDidMount() {
    Animated.timing(
      this.state.anim,
      {
        toValue: 1,
        duration: 1000,
        //easing: Easing.bezier(0.215, 0.610, 0.355, 1.000)
      }
    ).start();
  }

  animStart = () => {
    this.setState({
      anim: new Animated.Value(0)
    });
  }

  render() {
    const translateY = this.state.anim.interpolate({
      inputRange: [0, 0.2, 0.4, 0.43, 0.53, 0.7, 0.8, 0.9, 1],
      outputRange: [0, 0, -30, -30, 0, -15, 0, -4, 0]
    });
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Animated.Text
            style={{
              fontFamily: Fonts.FontLight,
              fontSize: 60,
              color: '#fc4a1a',
              transform: [{ translateY }]
            }}>
            Animate
          </Animated.Text>
        </View>
        <View style={{
          flexDirection: 'row',
          padding: 20
        }}>
          <View style={{ flex: 1, }}>
            <Text>Right</Text>
          </View>
          <TouchableOpacity onPress={()=>this.animStart()}>
            <View style={{
              borderColor: '#fc4a1a',
              borderWidth: 2,
              height: 50,
              justifyContent: 'center',
              paddingHorizontal: 10,
              borderRadius: 5
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
