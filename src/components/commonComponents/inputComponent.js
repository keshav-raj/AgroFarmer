/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
import React from 'react';
import {TextInput} from 'react-native';
import Styles from '../../styles/styles';

export default class InputComponent extends React.Component {
  render() {
    const {
      isTypeNumeric,
      onChangeCallBack,
      placeholder,
      color,
      isDiabled} = this.props;
    return (
      <TextInput
        style={Styles.inputContainer}
        placeholder={placeholder}
        disabled={isDiabled}
        onChangeText={(text) => onChangeCallBack(text)}
        keyboardType={isTypeNumeric ? 'phone-pad' : 'default'} />
    );
  }
}
