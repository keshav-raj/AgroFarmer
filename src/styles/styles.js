import {StyleSheet, Dimensions} from 'react-native';
import {appTheme} from '../constants';

const {width} = Dimensions.get('screen');
const thumbMeasure = (width - 48 - 32) / 3;


export default styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: appTheme.COLORS.BACKGROUND,
    color: appTheme.COLORS.HEAD_TEXT,
  },
  button: {
    padding: 5,
    margin: 2,
    borderWidth: 0,
    borderRadius: 5,
    flex: 1,
    height: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  loginContentWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: 'center',
    width: thumbMeasure,
    height: thumbMeasure,
  },
  mrTop5: {
    marginTop: 5,
  },
  brandStyle: {
    letterSpacing: 2,
    color: appTheme.COLORS.PRIMARY,
  },
  inputContainer: {
    width: '100%',
    borderBottomWidth: 0.5,
    borderColor: appTheme.COLORS.PRIMARY,
    borderRadius: 5,
    backgroundColor: appTheme.COLORS.BACKGROUND,
    color: appTheme.COLORS.PRIMARY,
    marginTop: 5,
  },
  spacer: {
    height: 30,
  },
});
