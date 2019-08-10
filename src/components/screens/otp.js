/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
import React from 'react';
import {View, Image, Text} from 'react-native';
import Styles from '../../styles/styles';
import {ButtonComponent, InputComponent} from '../commonComponents';
import {appTheme} from '../../constants';

class OtpScreen extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={Styles.pageContainer}>
        <View style={Styles.loginContentWrapper}>
          <Image
            source={require('../../../assets/images/Logo.png')}
            resizeMode="cover"
            style={Styles.thumb}
          />
          <Text
            style={{...Styles.mrTop5, ...Styles.brandStyle}}
            size={appTheme.SIZES.HEAD_TEXT} color={appTheme.COLORS.HEAD_TEXT}>
            Agro Central
          </Text>
          <Text
            style={{...Styles.mrTop5, ...Styles.brandStyle}}
            size={appTheme.SIZES.TEXT} muted>
            Farmers Friend
          </Text>
          <View style={Styles.spacer} />
          <InputComponent
            onChangeCallBack={() => true}
            placeholder="Enter OTP"
            isTypeNumeric
          />
        </View>
        <View style={Styles.footer}>
          <ButtonComponent
            BackgroundColor={appTheme.COLORS.PRIMARY}
            text="Login"
            onClickCallBack={() => {
              navigate('Home');
            }} />
          <ButtonComponent
            isDiabled={true}
            BackgroundColor={appTheme.COLORS.DISABLED_BUTTON}
            text="Resend (1s)"
            onClickCallBack={() => { }} />
        </View>
      </View>
    );
  }
}
export default OtpScreen;

