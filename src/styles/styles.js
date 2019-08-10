import { StyleSheet, Dimensions, Platform} from 'react-native';
import {appTheme} from '../constants';

const {width , height} = Dimensions.get('screen');
const thumbMeasure = (width - 48 - 32) / 3;
const shadows = {
  bottomBarShadow: {
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.6,
    shadowColor: '#000',
    elevation: Platform.OS === 'ios' ? 2 : 20,
  },
  topBarShadow: {
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: '#000',
    shadowOpacity: Platform.OS === 'ios' ? 0.6 : 0.2,
    elevation: 2,
  },
  cardShadow: {
    elevation: 2,
    shadowOpacity: 0.4,
    shadowRadius: 2,
    shadowColor: '#000',
    shadowOffset: { height: 2, width: 0 },
  },
}

export default styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: appTheme.COLORS.BACKGROUND,
  },
  button: {
    padding: 5,
    margin: 2,
    borderWidth: 0,
    borderRadius: 5,
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallButton: {
    padding: 5,
    margin: 2,
    borderWidth: 0,
    borderRadius: 2,
    flex: 1,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSecondary:{
    padding: 5,
    margin: 2,
    borderWidth: 3,
    borderRadius: 5,
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: appTheme.COLORS.PRIMARY,
    color:appTheme.COLORS.PRIMARY
  },
  footer: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignSelf: 'flex-end'
  },
  loginContentWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  thumb: {
    borderRadius: 2,
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
    backgroundColor: appTheme.COLORS.ON_PRIMARY,
    color: appTheme.COLORS.PRIMARY,
    marginTop: 5,
  },
  spacer: {
    height: 30,
  },
  headerConatainer:{
    flexDirection: 'row',
    justifyContent:"space-between",
    height: 50,
    backgroundColor: appTheme.COLORS.PRIMARY,
    paddingHorizontal: 5,
    paddingVertical: 2,
    alignItems: 'center',
  },
  headerLeftChild: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingLeft: 10,
  },
  headerRightChild: {
    paddingRight: 5,
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    flexWrap:'wrap',
    fontSize: appTheme.SIZES.HEAD_TEXT,
    color: appTheme.COLORS.ON_PRIMARY,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  CardComponentOne: {
    backgroundColor: appTheme.COLORS.ON_PRIMARY,
    borderRadius: 5,
    marginVertical: 20,
    marginHorizontal: 10,
    ...shadows.cardShadow,
  },
  cardText:{
    color: appTheme.COLORS.PRIMARY_TEXT,
    fontSize: appTheme.SIZES.TEXT,
    flexWrap: 'wrap',
  },
  cardTextHead: {
    color: appTheme.COLORS.PRIMARY_TEXT,
    fontSize: appTheme.SIZES.TEXT,
    paddingVertical: 5,
    flexWrap: 'wrap',
  },
  priceText: {
    color: appTheme.COLORS.PALLETTWO,
    fontSize: appTheme.SIZES.TEXT,
    paddingVertical: 5,
    flexWrap: 'wrap',
  },
  mainTitle: {
    color: appTheme.COLORS.PRIMARY_TEXT,
    fontSize: appTheme.SIZES.MAIN_TITLE,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexWrap: 'wrap',
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
  sliderImage: {
    margin:3,
    padding: 1,
    paddingHorizontal:4,
    borderRadius: 2,
    ...shadows.cardShadow,
  },
  CommonSpacing:{
    marginVertical:30,
  },
  menuList:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:10,
    paddingVertical:25,
    borderBottomColor: appTheme.COLORS.PRIMARY,
    borderBottomWidth: 0,
  },
  menuListText:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  CenterToScreen:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  fullWidthImage:{
    width: width,
    height: '70%',
  }

});
