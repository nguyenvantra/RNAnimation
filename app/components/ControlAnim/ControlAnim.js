/**
 * @author nguyenvantra
 * @email dkdarknessnvt@gmail.com
 * @create date 2017-11-30 01:04:11
 * @modify date 2017-11-30 01:04:11
 * @version 1.0.0
 * @since 1.0.0
 * @desc ControlAnim: Component hanlder event show animation
*/

import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-native-material-dropdown';

import styles from './styles';
import Strings from '../../resources/Strings';

export default class ControlAnim extends Component {
  //Prop types of component
  static propTypes = {
    data: PropTypes.array,
    value: PropTypes.string,
    label: PropTypes.string,
    onSelect: PropTypes.func,
    onPress: PropTypes.func
  }

  //Default props of component
  static defaultProps = {

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, marginRight: 20 }}>
          <Dropdown
            value={this.props.value}
            onChangeText={this.props.onSelect}
            label={this.props.label}
            data={this.props.data}
            itemCount={3}
          />
        </View>
        <TouchableOpacity onPress={() => { this.props.onPress }}>
          <View style={styles.containerButton}>
            <Text style={styles.textButton}>{Strings.contentButton}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
