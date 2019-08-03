/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
import React from 'react';
import {View, Image, Text} from 'react-native';
import Styles from '../../styles/styles';
import {ButtonComponent, InputComponent} from '../commonComponents';
import {appTheme} from '../../constants';

const log = (str) => {
  return true;
};

class Login extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={Styles.pageContainer}>
        <View style={Styles.loginContentWrapper}>
          <Image
            source={require('../../../assets/images/Logo.png')}
            resizeMode="cover"
            style={styles.thumb}
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
          <View style={Styles.spacer}/>
          <InputComponent
            onChangeCallBack={log}
            placeholder="Phone Number"
          />
        </View>
        <View style={Styles.footer}>
          <ButtonComponent
            BackgroundColor={appTheme.COLORS.PRIMARY}
            text="Login" onClickCallBack={() => {
              navigate('OTPpage');
            }}/>
        </View>
      </View>
    );
  }
}
export default Login;

