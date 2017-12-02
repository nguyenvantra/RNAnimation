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
import { View } from 'react-native';

import ContextAnim from '../components/ContextAnim';
import ControlAnim from '../components/ControlAnim';
import styles from './styles';
import Strings from '../resources/Strings';

export default class AttentionSeekersScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ContextAnim content={Strings.contentTextAnim} style={{}} />
      </View>
    );
  }
}

