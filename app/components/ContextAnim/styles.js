/**
 * @author nguyenvantra
 * @email dkdarknessnvt@gmail.com
 * @create date 2017-11-30 12:48:53
 * @modify date 2017-11-30 12:48:53
 * @version 1.0.0
 * @since 1.0.0
 * @desc Customize style ContextAnim component
*/

import { StyleSheet } from 'react-native';
import Fonts from '../../resources/Fonts';
import Colors from '../../resources/Colors';
import Dimens from '../../resources/Dimens';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contextAnim: {
    fontFamily: Fonts.FontLight,
    fontSize: Dimens.animFontSize,
    color: Colors.animTextColor,
  }
});