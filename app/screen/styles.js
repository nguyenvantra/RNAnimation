/**
 * @author nguyenvantra
 * @email dkdarknessnvt@gmail.com
 * @create date 2017-12-02 10:27:28
 * @modify date 2017-12-02 10:27:28
 * @version 1.0.0
 * @since 1.0.0
 * @desc Customize style of screen
*/

import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  containerTextAnim: {
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