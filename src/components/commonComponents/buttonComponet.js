/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from '../../styles/styles';
import {appTheme} from '../../constants';

export default class ButtonComponent extends React.Component {
  render() {
    const {
      text,
      onClickCallBack,
      BackgroundColor,
      isDiabled,
      Color,
    } = this.props;
    return (
      <TouchableOpacity
        style={{...styles.button, backgroundColor: BackgroundColor}}
        disabled={isDiabled}
        onPress={() => onClickCallBack()}>
        <Text
          style={{color: Color || appTheme.COLORS.BUTTON_TEXT}}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  }
}
