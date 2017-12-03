/**
 * @author nguyenvantra
 * @email dkdarknessnvt@gmail.com
 * @create date 2017-11-30 01:05:31
 * @modify date 2017-11-30 01:05:31
 * @version 1.0.0
 * @since 1.0.0
 * @desc Customize style of ControlAnim component
*/

import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  containerButton: {
    borderColor: '#fc4a1a',
    borderWidth: 2,
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15
  },
  textButton: {
    fontFamily: Fonts.FontBold,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fc4a1a'
  }
});